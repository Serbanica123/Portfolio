# Alexandru Serban — Portfolio

My personal portfolio website. It shows my projects, work experience and skills.
It is made with **React**, **Vite** and **React Router**.

The home page has all the sections one under the other. Every project also has its own page
(for example `/projects/laser-turret`), so you can send someone a link to one project.

---

## 1. Run the project

You need **Node.js 20.19 or newer**. Check with `node -v`.

First time only, install the packages:

```bash
npm install
```

Start the website on your computer:

```bash
npm run dev
```

Open **http://localhost:5173** in the browser.
Every time you save a file, the page updates by itself. You don't need to refresh.

To stop it, press `Ctrl + C` in the terminal.

### All commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the site on your computer, with live updates |
| `npm run build` | Makes the final website in the `dist/` folder (this is what gets uploaded online) |
| `npm run preview` | Opens the final website from `dist/` at http://localhost:4173 |
| `npm run lint` | Checks the code for mistakes |
| `npm run format` | Cleans up the code formatting in all files |

**Before putting the site online, always run `npm run build` and then `npm run preview`.**
Some problems (like missing images) only show up in the final version, not in `npm run dev`.

### See the site inside VS Code

Press `Ctrl + Shift + P`, type **Simple Browser: Show** and enter `http://localhost:5173`.
VS Code will also ask you to install the recommended extensions. Say yes.

---

## 2. How the project is organized

The main idea: **the text lives in `src/data/`, the look lives in `src/components/`.**
To change what the site says, you almost always only edit a file in `src/data/`.

```
Portfolio/
├── index.html                  the base HTML page (tab title, icon)
├── package.json                list of packages and commands
├── vite.config.js              Vite settings (you rarely need to touch this)
└── src/
    ├── main.jsx                starts the app (don't touch)
    ├── App.jsx                 the pages: home page and project pages
    ├── index.css               styles for the whole page
    ├── variables.css           ALL THE COLORS
    ├── data/                   ALL THE CONTENT – the files you will edit
    │   ├── profile.js          name, one-line intro, about text, email, links, open-to-work roles, CV
    │   ├── projects.js         ALL PROJECTS (internships, personal projects, competition teams)
    │   ├── experience.js       the short timeline lines + education
    │   ├── skills.js           the skill groups
    │   ├── highlights.js       the 4 boxes under the top of the page
    │   └── hobbies.js          text and photo folder for "Beyond work"
    ├── pages/
    │   ├── Home.jsx            ORDER OF THE SECTIONS on the home page
    │   └── ProjectPage.jsx     the page for one project
    ├── components/
    │   ├── layout/             Navbar (top menu) and Footer
    │   ├── sections/           Hero, Highlights, Work, Skills, Experience, About, BeyondWork, Contact
    │   └── ui/                 small parts used everywhere: ProjectCard, Gallery, Tag, Button, ...
    ├── utils/
    │   ├── media.js            finds the photos and videos for each project
    │   └── text.js             small text helper
    └── assets/
        ├── ProfilePicture.png
        ├── Alexandru-...-Resume.pdf
        ├── Skills Icons/           icons for the skill boxes
        └── <Project Name>/         one folder per project with its photos and video
```

Every `.jsx` file has a matching `.module.css` file with its styles
(for example `ProjectCard.jsx` → `ProjectCard.module.css`).

---

## 3. How it works

1. `projects.js` has a **list of projects**. Each one becomes:
   - a **card** in the Work section on the home page, and
   - its own **project page** at `/projects/<slug>`.
2. The Work section has **filter buttons** (All / Internships / Personal projects / Competitions).
   They use the `type` of each project.
3. Each project finds its photos and video by the **folder name** in `src/assets/` (`mediaFolder`).
   `media.js` does this automatically.
4. The **caption** under each photo is the **file name** of the photo (without `.jpg`/`.png`).
5. Words between `**double stars**` in any text in `src/data/` are shown **bold** (in the accent color).

---

## 4. Add a new project

### Step 1 — Add the photos and video

1. Make a new folder in `src/assets/`, for example `src/assets/Robot Arm/`.
2. Put the photos inside (`.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`).
3. **Name each photo like you want its caption to read**, for example `Gripper close-up.jpg`.
4. Optional: add **one** video (`.mp4`, `.webm`). If there is more than one, only the first one is used.
   The video plays on the card when the mouse is over it, and at the top of the project page.

Photos are shown in **alphabetical order** of their file names.

Keep the files small. Photos: under 1 MB, about 1600 px wide. Videos: under 10 MB, 720p, no sound.

### Step 2 — Add the entry

Open `src/data/projects.js` and add a new block to the `projects` list.
Copy an existing one and change it:

```js
{
    slug: "robot-arm",                  // the link: /projects/robot-arm (small letters, dashes, no spaces)
    title: "Robot Arm",
    type: "personal",                   // "internship" | "personal" | "competition"
    status: "Work in progress",         // optional – remove the line if it is finished
    company: "",                        // only for internships and teams
    role: "",                           // only for internships and teams
    dates: "",                          // only for internships and teams
    summary: "Short intro. Use **bold** for important words.",
    whatIDidTitle: "Implementation",    // or "Key contributions"
    whatIDid: [
        "First thing I did.",
        "Second thing I did.",
    ],
    result: "What came out of it.",
    mainSkills: ["C++", "ROS2", "SolidWorks"],          // 3–4 tags shown on the card
    skills: ["C++", "ROS2", "SolidWorks", "Python"],    // all tags, shown on the project page
    mediaFolder: "Robot Arm",           // must match the folder name EXACTLY
    cover: "Gripper close-up",          // file name (no .jpg) of the photo on the card
    github: "https://github.com/...",   // or "" for none
},
```

Don't forget the **comma** after the closing `}`.

The order in the list is the order of the cards. Put the best projects first.

### What each field does

| Field | What it is | If you leave it out or empty |
|---|---|---|
| `slug` | The end of the project link | — (required, must be different for each project) |
| `title` | The card and page title | — (required) |
| `type` | Which filter it belongs to and the label on the card | — (required) |
| `status` | Extra label, like "Work in progress" | No extra label |
| `company`, `role`, `dates` | Shown under the title | Nothing is shown |
| `summary` | First text on the page, and the short text on the card | — (required) |
| `whatIDidTitle` + `whatIDid` | The main bullet list | No list |
| `result` | The "Result" box | No box |
| `otherWork` | Bullet list "Other projects" | No list |
| `nextSteps` | Bullet list "Next steps" | No list |
| `mainSkills` | Tags on the card (highlighted on the page) | No tags on the card |
| `skills` | All tags on the project page | — (use `[]` for none) |
| `mediaFolder` | Folder in `src/assets/` with photos and video | No photos or video |
| `cover` | The photo shown on the card | The first photo is used |
| `github` | "See the code on GitHub" button | Button is hidden |

### Step 3 — (only for jobs and teams) add it to the timeline

Open `src/data/experience.js` and add a line to `experience`. Put the newest at the **top**.
`project` is the `slug` of the project, so the timeline links to it:

```js
{ dates: "01/2026 – present", role: "Robotics Engineer", place: "Company Name", project: "robot-arm" },
```

---

## 5. Change other content

All of these are in `src/data/`.

| What | Where |
|---|---|
| Name, one line under the name, email | `profile.js` → `name`, `tagline`, `email` |
| About text | `profile.js` → `about` (one string = one paragraph) |
| "Open to work" roles | `profile.js` → `openToWork` |
| Social links | `profile.js` → `links` |
| Text in the Contact section | `profile.js` → `contactText` |
| The 4 boxes under the top | `highlights.js` |
| Skills | `skills.js` (strongest first; `main` = the highlighted ones) |
| Timeline and education | `experience.js` |
| "Beyond work" text and photos | `hobbies.js` (photos come from the folder in `mediaFolder`) |

### Social links
To add a new icon, add the link in `profile.js` → `links`, then add the icon in
`src/components/ui/SocialLinks.jsx` → `icons`. Icons come from [react-icons](https://react-icons.github.io/react-icons/).

### Skill groups
Copy a whole `{ category: ..., icon: ..., main: [...], skills: [...] }` block in `skills.js`.
For the icon, put an `.svg` in `src/assets/Skills Icons/`, import it at the top like the others, and use it in `icon:`.

### Profile photo
Replace `src/assets/ProfilePicture.png` with a new photo **with the same name**.

### Resume (CV)
Put the new PDF in `src/assets/` and update the file name in the `import resumePdf from ...` line
at the top of `src/data/profile.js`. All the "Resume" / "Download CV" buttons use it.

### Section order
`src/pages/Home.jsx`. Move the lines like `<Skills />` up or down, or delete one to hide a section.
If you remove a section, also remove its link from `links` in `src/components/layout/Navbar.jsx`.

### Colors
`src/variables.css`. Change a color once and it changes everywhere.

| Name | Used for |
|---|---|
| `--bg-main` | Page background |
| `--bg-card` | Card and box background |
| `--bg-teal` | Labels and highlighted tags |
| `--bg-skill` | Normal tags |
| `--text-primary` | Main text color |
| `--text-muted` | Small grey text (dates, captions) |
| `--accent` | Titles, links, bold words, buttons |

### Browser tab title
The home page title is set in `src/pages/Home.jsx`, project pages use the project title.
`index.html` → `<title>` is only used while the page is loading.

---

## 6. Styling

- Most styles are in the `.module.css` file next to each component.
  In the code you use them like `className={styles.card}`.
- You can also use **Tailwind** classes directly in `className`, like `mt-4` (space above).
  List of classes: https://tailwindcss.com/docs

---

## 7. Putting it online (GitHub Pages)

The site is published at **https://serbanica123.github.io/Portfolio/**.
Every time you push to `main`, GitHub builds the site and puts it online by itself (takes 1–2 minutes).
You can see the progress in the **Actions** tab of the repo on GitHub.

### First time only

1. The repo must be **public** (Settings → General → Danger Zone → Change visibility),
   unless you have GitHub Pro.
2. Go to **Settings → Pages** and under **Source** choose **GitHub Actions**.
3. Push to `main` (or go to **Actions → Deploy to GitHub Pages → Run workflow**).

### How it works

- `.github/workflows/deploy.yml` runs `npm ci` and `npm run build`, then uploads the `dist/` folder.
- `vite.config.js` has `base: "/Portfolio/"` for the build, because the site lives in the `/Portfolio/` folder
  of the address. **If you rename the repo, change this too.** `npm run dev` still runs at http://localhost:5173/.
- GitHub Pages doesn't know project links like `/Portfolio/projects/laser-turret`, so it shows `404.html`.
  The workflow makes `404.html` a copy of `index.html`, so the app loads and opens the right project anyway.
- `npm run preview` does not work well with the `/Portfolio/` prefix (the page stays blank).
  That is only a problem on your computer, not on GitHub Pages.

### Limits

- GitHub Pages sites can be at most **1 GB**, and one file can be at most **100 MB**.
  The biggest video now is about 84 MB, so keep videos small (see section 4).

---

## 8. Common problems

| Problem | Fix |
|---|---|
| Photos or video don't show | `mediaFolder` must match the folder name exactly (spaces and capitals too) |
| Wrong photo on the card | `cover` must be the file name exactly, without `.jpg`/`.png` |
| Photo is not in the gallery | Check the file type is `.jpg`, `.jpeg`, `.png`, `.webp` or `.svg` |
| Project link says "Project not found" | The `slug` in the link and in `projects.js` must be the same |
| Page is blank / white | There is a mistake in the code. Look at the terminal and the browser console (`F12`). Usually a missing comma, bracket or quote |
| An image works in `dev` but not after `build` | Don't write paths as text like `"src/assets/pic.png"`. Always use `import pic from "../assets/pic.png"` |
| `npm run dev` says a command is not found | Run `npm install` first |
| Site feels slow | Photos or videos are too big. Make them smaller (see Step 1 in section 4) |

---

## 9. Git

- Files that should not be uploaded (like `node_modules/`, `dist/` and `.env`) are listed in `.gitignore`.
- Use only **npm**, not yarn. The package list is saved in `package-lock.json`.
- Before you commit, run `npm run lint` and `npm run build` to check that nothing is broken.
