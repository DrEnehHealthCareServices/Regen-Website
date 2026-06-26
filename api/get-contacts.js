export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({ message: 'GitHub token (GITHUB_TOKEN) not configured on server environment.' });
  }

  const gitRepo = 'DrEnehHealthCareServices/Regen-Website';
  const gitBranch = 'main';
  const filePath = 'src/data/contactMessages.json';
  const url = `https://api.github.com/repos/${gitRepo}/contents/${filePath}?ref=${gitBranch}`;

  try {
    const getRes = await fetch(url, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Vercel-Serverless-Function',
        'Cache-Control': 'no-cache'
      }
    });

    if (getRes.status === 200) {
      const fileData = await getRes.json();
      const content = Buffer.from(fileData.content, 'base64').toString('utf-8');
      let messages = [];
      try {
        messages = JSON.parse(content);
      } catch (e) {
        messages = [];
      }
      return res.status(200).json(messages);
    } else if (getRes.status === 404) {
      return res.status(200).json([]);
    } else {
      const errText = await getRes.text();
      throw new Error(`Failed to fetch contact database from GitHub. Status: ${getRes.status}, Error: ${errText}`);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}
