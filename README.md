🚀 GitHub Profile Viewer
A responsive and visually appealing web application that allows users to search and view GitHub profiles by entering a username. This tool displays public information fetched directly from the GitHub API, including repositories, followers, and bio, with a sleek animated UI.

![landing_page](https://github.com/user-attachments/assets/b85aa529-833c-461a-8f66-a1f60edb061d)



🔍 Features
🔎 Search GitHub Profiles: Fetch real-time user data by GitHub username.

📊 Display Stats: View public repositories, followers, and following count.

🌐 Profile Link: Direct button to visit the GitHub profile.

🎨 Modern UI: Stylish interface with gradient backgrounds and floating animations.

✨ Animated Loader & Feedback: Shows a loader during fetch and graceful "User Not Found" messages.

📱 Fully Responsive: Works smoothly on desktop, tablet, and mobile devices.

🛠️ Tech Stack
Technology	Role
HTML5	Structure of the application
CSS3	Styling and responsiveness (custom & animations)
JavaScript	Logic for API calls, dynamic DOM manipulation
GitHub API	Fetch user profile data
Font Awesome	Icons for GitHub branding and UI enhancement

🧠 How It Works
Input
User enters a valid GitHub username in the search bar.

Fetch Request
On clicking the Search button, JavaScript sends a GET request to:
https://api.github.com/users/{username}

Data Display
If the user exists:

Shows avatar, name, bio

Displays stats: repositories, followers, following

Includes a button linking to the actual GitHub profile

If not found:

Displays a custom error message with styled feedback

UI/UX Enhancements

Background particle animations

Loader during data fetch

Smooth transitions and responsiveness

📁 GitHub-Profile-Viewer
├── index.html       # Main HTML structure
├── style.css        # Styling and responsiveness
└── script.js        # Functionality, API calls, DOM rendering
💡 Installation & Usage
No setup required — it's a frontend-only project.

Steps:

Clone the repo or download the files.

Open index.html in a web browser.

Enter a GitHub username and explore their profile details.
