export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({ message: 'GitHub token (GITHUB_TOKEN) not configured on server environment.' });
  }

  const { firstName, email, phone, message } = req.body;
  if (!firstName || !email || !phone || !message) {
    return res.status(400).json({ message: 'Missing required contact fields.' });
  }

  const gitRepo = 'DrEnehHealthCareServices/Regen-Website';
  const gitBranch = 'main';
  const filePath = 'src/data/contactMessages.json';
  const url = `https://api.github.com/repos/${gitRepo}/contents/${filePath}`;

  try {
    // 1. Fetch current contactMessages.json from GitHub
    const getRes = await fetch(`${url}?ref=${gitBranch}`, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Vercel-Serverless-Function'
      }
    });

    let sha = null;
    let messages = [];

    if (getRes.status === 200) {
      const fileData = await getRes.json();
      sha = fileData.sha;
      const content = Buffer.from(fileData.content, 'base64').toString('utf-8');
      try {
        messages = JSON.parse(content);
      } catch (e) {
        messages = [];
      }
    } else if (getRes.status !== 404) {
      const errText = await getRes.text();
      throw new Error(`Failed to fetch database metadata. Status: ${getRes.status}, Error: ${errText}`);
    }

    // 2. Append new lead details
    const newLead = {
      id: Date.now(),
      firstName,
      email,
      phone,
      message,
      date: new Date().toISOString()
    };

    messages.unshift(newLead); // Add newest at the top

    // 3. Commit new content to GitHub
    const fileContentString = JSON.stringify(messages, null, 2);
    const base64Content = Buffer.from(fileContentString, 'utf-8').toString('base64');

    const putBody = {
      message: `content: contact submission from "${firstName}" via website form`,
      content: base64Content,
      branch: gitBranch
    };
    if (sha) {
      putBody.sha = sha;
    }

    const putRes = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Vercel-Serverless-Function'
      },
      body: JSON.stringify(putBody)
    });

    if (putRes.status === 200 || putRes.status === 201) {
      return res.status(200).json({ message: 'Success' });
    } else {
      const errorData = await putRes.json();
      throw new Error(errorData.message || 'Failed to update file on GitHub.');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}
