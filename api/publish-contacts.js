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

  const { messages } = req.body;
  if (!messages) {
    return res.status(400).json({ message: 'Missing messages database payload.' });
  }

  const gitRepo = 'DrEnehHealthCareServices/Regen-Website';
  const gitBranch = 'main';
  const filePath = 'src/data/contactMessages.json';
  const url = `https://api.github.com/repos/${gitRepo}/contents/${filePath}`;

  try {
    // 1. Fetch current file metadata (sha) from GitHub
    const getRes = await fetch(`${url}?ref=${gitBranch}`, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Vercel-Serverless-Function'
      }
    });

    let sha = null;
    if (getRes.status === 200) {
      const fileData = await getRes.json();
      sha = fileData.sha;
    } else if (getRes.status !== 404) {
      const errText = await getRes.text();
      throw new Error(`Failed to fetch file metadata from GitHub. Status: ${getRes.status}, Error: ${errText}`);
    }

    // 2. Commit new content to GitHub
    const fileContentString = JSON.stringify(messages, null, 2);
    const base64Content = Buffer.from(fileContentString, 'utf-8').toString('base64');

    const putBody = {
      message: `content: update contact messages database via Admin Portal`,
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
      throw new Error(errorData.message || 'Failed to update contact database on GitHub.');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}
