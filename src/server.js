const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const PROJECTS_FILE_PATH = './projects.json';

// Projeleri al endpoint'i
app.get('/api/projects', async (req, res) => {
    try {
        const projectsData = await fs.readFile(PROJECTS_FILE_PATH);
        const projects = JSON.parse(projectsData);
        res.json(projects);
    } catch (error) {
        console.error('Error getting projects:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Proje ekleme endpoint'i
app.post('/api/projects', async (req, res) => {
    try {
        const { title, links } = req.body;
        const projectsData = await fs.readFile(PROJECTS_FILE_PATH);
        const projects = JSON.parse(projectsData);
        
        const newProject = { id: projects.length + 1, title, links };
        projects.push(newProject);

        await fs.writeFile(PROJECTS_FILE_PATH, JSON.stringify(projects, null, 2));
        
        res.status(201).json(newProject);
    } catch (error) {
        console.error('Error adding project:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
