# Alexandru Serban — Portfolio

My personal portfolio website. It shows my work experience, personal projects and skills.
It is a single web page made with **React** and **Vite**.

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

```
Portfolio/
├── index.html                  the base HTML page (tab title, icon)
├── package.json                list of packages and commands
├── vite.config.js              Vite settings (you rarely need to touch this)
└── src/
    ├── main.jsx                starts the app (don't touch)
    ├── App.jsx                 ORDER OF THE SECTIONS on the page
    ├── index.css               styles for the whole page
    ├── variables.css           ALL THE COLORS
    ├── utils/
    │   └── media.js            finds the photos and videos for each project
    ├── components/
    │   ├── Project.jsx         one card: text + photo slider + video
    │   ├── Skills.jsx          SKILLS LIST (the boxes in the About section)
    │   ├── SectionLine.jsx     the section titles with the line under them
    │   ├── Navbar.jsx          top menu (currently turned off)
    │   └── Sections/
    │       ├── AboutMe.jsx         ABOUT TEXT, profile photo, social links, "Open to work"
    │       ├── WorkExperience.jsx  WORK EXPERIENCE ENTRIES
    │       ├── Projects.jsx        PERSONAL PROJECT ENTRIES
    │       ├── Hobbies.jsx         empty for now
    │       └── Contact.jsx         empty for now
    └── assets/
        ├── ProfilePicture.png
        ├── Alexandru-...-Resume.pdf
        ├── Skills Icons/           icons for the skill boxes
        └── <Project Name>/         one folder per project with its photos and video
```

The files in CAPITALS above are the ones you will edit most often.

Every `.jsx` file has a matching `.module.css` file with its styles
(for example `Project.jsx` → `Project.module.css`).

---

## 3. How it works

1. `App.jsx` puts the sections on the page, from top to bottom.
2. `WorkExperience.jsx` and `Projects.jsx` each have a **list of entries**.
   Every entry is shown as a card by `Project.jsx`.
3. Each card finds its photos and video by the **folder name** in `src/assets/`.
   `media.js` does this automatically.
4. The **caption** under each photo is the **file name** of the photo (without `.jpg`/`.png`).
5. On big screens, cards take turns: text on the left, then text on the right, and so on.

---

## 4. Add a new personal project

### Step 1 — Add the photos and video

1. Make a new folder in `src/assets/`, for example `src/assets/Robot Arm/`.
2. Put the photos inside (`.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`).
3. **Name each photo like you want its caption to read**, for example `Gripper close-up.jpg`.
4. Optional: add **one** video (`.mp4`, `.webm`). If there is more than one, only the first one is used.

Photos are shown in **alphabetical order** of their file names.

Keep the files small. Photos: under 1 MB, about 1600 px wide. Videos: under 10 MB, 720p, no sound.

### Step 2 — Add the entry

Open `src/components/Sections/Projects.jsx` and add a new block to the `projects` list.
Copy an existing one and change it:

```jsx
{
    title: "Robot Arm",
    description:
        <div className="max-h-64 overflow-y-auto p-4 rounded-lg shadow">
            <p>
                Short intro. Use <strong>bold</strong> for important words.
            </p>

            <h4 className="mt-4 font-medium">Implementation:</h4>
            <ul className="list-disc list-inside space-y-2 mt-2">
                <li>First thing I did.</li>
                <li>Second thing I did.</li>
            </ul>

            <h4 className="mt-4 font-medium">Result:</h4>
            <p>What came out of it.</p>
        </div>,
    images: getImages("Robot Arm"),   // must match the folder name EXACTLY
    video: getVideo("Robot Arm"),     // same folder name
    link: "https://github.com/...",   // GitHub link, or "" for none
    skills: ["C++", "ROS2", "SolidWorks"]
},
```

Don't forget the **comma** after the closing `}`.

The order in the list is the order on the page. Put the best projects first.

### What each field does

| Field | What it is | If you leave it empty |
|---|---|---|
| `title` | The card title | — (required) |
| `description` | The main text. Keep the `<div ...>` wrapper so long text scrolls | — (required) |
| `images` | Photos from the folder | No photo slider |
| `video` | Video from the folder | Shows "No video available" |
| `link` | GitHub link, shown as "Github Page" | Link is hidden (use `""`) |
| `skills` | Small tags at the bottom of the card | — (use `[]` for none) |

---

## 5. Add a new work experience

Same as a project, but in `src/components/Sections/WorkExperience.jsx`.
The only difference is the **title**, which also has the dates:

```jsx
title: <>
    <strong>Robotics Engineer</strong> at <strong>Company Name</strong>
    <span className="block text-gray-500 text-sm">01/2026 – present</span>
</>,
```

Put the newest job at the **top** of the list.

---

## 6. Change other content

### About text
`src/components/Sections/AboutMe.jsx` → the `AboutText` function. Each `<p>...</p>` is one paragraph.

### "Open to work" roles
`AboutMe.jsx` → the `openToWorkRoles` list. One role per line, in quotes, with a comma.

### Social links
`AboutMe.jsx` → `links`. Each line is one icon with its link.
To add one, import the icon from [react-icons](https://react-icons.github.io/react-icons/) at the top, for example:

```jsx
import { FaEnvelope } from "react-icons/fa";
// ...
email: <a href="mailto:me@example.com" aria-label="Email"><FaEnvelope /></a>,
```

### Profile photo
Replace `src/assets/ProfilePicture.png` with a new photo **with the same name**.

### Skills
`src/components/Skills.jsx` → the `categorizedSkills` list.

- Add a skill: add `{ type: "Docker", level: 70 },` to a category.
  `level` is from 0 to 100. It sets the bar length, and skills are sorted by it.
- Add a category: copy a whole `{ category: ..., image: ..., skills: [...] }` block.
  For the icon, put an `.svg` in `src/assets/Skills Icons/`, import it at the top like the others, and use it in `image:`.

### Section titles and order
`src/App.jsx`. Each section is a title (`<SectionLine Title="..." />`) plus its content (`<Projects />` etc.).
Move the lines up or down to change the order, or delete a pair to hide a section.

### Colors
`src/variables.css`. Change a color once and it changes everywhere.

| Name | Used for |
|---|---|
| `--bg-main` | Page background |
| `--bg-card` | Card and box background |
| `--bg-skill` | Skill tags |
| `--text-primary` | Main text color |
| `--text-secondary` | Section titles, links, dark text |

### Resume (CV)
Put the new PDF in `src/assets/` and update the file name in the `import pdf from ...` line
in `src/components/Navbar.jsx`.
The top menu (Navbar) is turned off. To turn it on, remove the `{/* */}` around `<Navbar />` in `App.jsx`.

### Browser tab title
`index.html` → the `<title>` line.

---

## 7. Styling

- Most styles are in the `.module.css` file next to each component.
  In the code you use them like `className={styles.projectCard}`.
- Inside the descriptions you can also use **Tailwind** classes directly in `className`,
  like `mt-4` (space above), `font-medium` (medium bold), `list-disc` (bullet points).
  List of classes: https://tailwindcss.com/docs

---

## 8. Common problems

| Problem | Fix |
|---|---|
| Photos or video don't show on a card | The name in `getImages("...")` must match the folder name exactly (spaces and capitals too) |
| Photo is not in the slider | Check the file type is `.jpg`, `.jpeg`, `.png`, `.webp` or `.svg` |
| Page is blank / white | There is a mistake in the code. Look at the terminal and the browser console (`F12`). Usually a missing comma, bracket or `</tag>` |
| An image works in `dev` but not after `build` | Don't write paths as text like `"src/assets/pic.png"`. Always use `import pic from "../assets/pic.png"` |
| `npm run dev` says a command is not found | Run `npm install` first |
| Site feels slow | Photos or videos are too big. Make them smaller (see Step 1 in section 4) |

---

## 9. Git

- Files that should not be uploaded (like `node_modules/`, `dist/` and `.env`) are listed in `.gitignore`.
- Use only **npm**, not yarn. The package list is saved in `package-lock.json`.
- Before you commit, run `npm run lint` and `npm run build` to check that nothing is broken.
