/* ===================================================
   content.js — Portfolio OS v2
   =================================================== */
const CONTENT = {

  "readme": {
    title: "README.md",
    icon: "file-code",
    language: "markdown",
    breadcrumb: ["README.md"],
    content: `
      <div class="doc-content">
        <div class="hero-card">
          <div class="hero-glow"></div>
          <div class="hero-inner">
            <div class="status-badge">
              <span class="status-dot"></span>
              Open to Opportunities
            </div>
            <h1 class="hero-name">Yash Date</h1>
            <p class="hero-role">AI/ML Enthusiast &amp; Content Creator</p>
            <p class="hero-desc">
              18-year-old developer building practical AI-driven products and full-stack solutions. Currently working on Secret Tech and innovating at PranaAI.
            </p>
            <div class="hero-actions">
              <button class="btn-primary" onclick="openFile('resume')">📄 View Resume</button>
              <button class="btn-secondary" onclick="openFile('projects')">🚀 Projects</button>
              <a href="mailto:yashdate31@gmail.com" class="btn-ghost">✉️ Contact</a>
            </div>
            <div class="hero-tags">
              <span class="tag">AI / ML</span>
              <span class="tag">Python</span>
              <span class="tag">React</span>
              <span class="tag">Next.js</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Django</span>
            </div>
          </div>
        </div>

        <section id="what-i-do">
          <h2><span class="section-hash">#</span> What I Do</h2>
          <div class="cards-grid">
            <div class="feature-card">
              <div class="feature-icon">🌐</div>
              <h3>Full-Stack Web Dev</h3>
              <p>Building performant, scalable web applications using React, Next.js, Node.js, and modern databases.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>Integrating LLMs, computer vision, and ML models into practical products and developer tools.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🛠️</div>
              <h3>Developer Tools</h3>
              <p>Creating CLI tools, APIs, and automation systems that streamline developer workflows.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">✍️</div>
              <h3>Tech Writing</h3>
              <p>Writing clear, in-depth content about AI, emerging technologies, and software development.</p>
            </div>
          </div>
        </section>

        <section id="featured-projects">
          <h2><span class="section-hash">#</span> Featured Projects</h2>
          <div class="projects-list">
            <div class="project-item" onclick="openFile('projects')">
              <div class="project-header">
                <span class="project-icon">📱</span>
                <div>
                  <h3>SmartCafe</h3>
                  <span class="project-lang">React · Node.js · PostgreSQL</span>
                </div>
                <span class="project-arrow">→</span>
              </div>
              <p>A full-stack café management system with real-time orders, analytics dashboard, and AI-powered inventory predictions.</p>
            </div>
            <div class="project-item" onclick="openFile('projects')">
              <div class="project-header">
                <span class="project-icon">🧠</span>
                <div>
                  <h3>AI Code Reviewer</h3>
                  <span class="project-lang">Python · OpenAI · GitHub API</span>
                </div>
                <span class="project-arrow">→</span>
              </div>
              <p>Automated PR review tool that uses LLMs to analyze code quality, detect bugs, and suggest improvements.</p>
            </div>
            <div class="project-item" onclick="openFile('projects')">
              <div class="project-header">
                <span class="project-icon">🌐</span>
                <div>
                  <h3>Portfolio OS</h3>
                  <span class="project-lang">HTML · CSS · JavaScript</span>
                </div>
                <span class="project-arrow">→</span>
              </div>
              <p>This website — an IDE-inspired personal portfolio built entirely from scratch with vanilla web technologies.</p>
            </div>
          </div>
        </section>

        <section id="current-focus">
          <h2><span class="section-hash">#</span> Current Focus</h2>
          <div class="focus-list">
            <div class="focus-item">
              <span class="focus-dot active"></span>
              <div><strong>Building in public</strong> — Shipping side projects and documenting the process.</div>
            </div>
            <div class="focus-item">
              <span class="focus-dot"></span>
              <div><strong>Deep diving into LLMs</strong> — Fine-tuning and prompt engineering for production use cases.</div>
            </div>
            <div class="focus-item">
              <span class="focus-dot"></span>
              <div><strong>Mastering system design</strong> — Scalable architectures for high-traffic applications.</div>
            </div>
          </div>
        </section>
      </div>
    `
  },

      "about": {
    title: "about.mdx",
    icon: "info",
    language: "mdx",
    breadcrumb: ["about.mdx"],
    content: `
      <div class="doc-content">
        <div class="hero-card" style="text-align: center; align-items: center; justify-content: center; display: flex; flex-direction: column;">
          <div class="hero-glow"></div>
          <div class="hero-inner" style="width: 100%; align-items: center;">
            <h1 class="hero-name" style="margin-bottom: 20px;">💫 Hi there, I'm Yash Date 👋</h1>
            <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=24&pause=1000&color=007ACC&center=true&vCenter=true&width=500&lines=AI%2FML+Enthusiast;Content+Creator;Building+Secret+Tech;Innovating+at+PranaAI" alt="Typing SVG" style="max-width: 100%; margin-bottom: 20px;" />
            <div class="hero-actions" style="justify-content: center; margin-bottom: 20px;">
              <a href="https://instagram.com/_dy.patil_" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
              <a href="https://linkedin.com/in/yash-date-a361a8329" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
              <a href="mailto:yashdate31@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
            </div>
            <img src="https://komarev.com/ghpvc/?username=YashDate31&label=Profile%20Views&color=007ACC&style=for-the-badge" alt="Profile Views" />
          </div>
        </div>

        <section class="section">
          <h2>About Me</h2>
          <div class="card">
            <p>I'm Yash Date, an AI/ML enthusiast, content creator, and builder. I am currently innovating at PranaAI and working on some Secret Tech!</p>
            <p>I specialize in building intelligent web applications, shipping developer tools, and crafting high-performance user interfaces.</p>
          </div>
        </section>

        <section class="section">
          <h2>GitHub Stats</h2>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            <img src="https://github-readme-stats.vercel.app/api?username=YashDate31&show_icons=true&theme=transparent&hide_border=true&title_color=007ACC&icon_color=007ACC&text_color=333" alt="Yash's GitHub stats" style="max-width: 100%;"/>
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=YashDate31&theme=transparent&hide_border=true&title_color=007ACC&text_color=333&icon_color=007ACC" alt="Yash's GitHub Streak" style="max-width: 100%;"/>
          </div>
        </section>
        
        <section class="section">
          <h2>Top Languages</h2>
          <div style="display: flex; justify-content: center;">
             <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=YashDate31&layout=compact&theme=transparent&hide_border=true&title_color=007ACC&text_color=333" alt="Top Languages" style="max-width: 100%;"/>
          </div>
        </section>

        <section class="section">
          <h2>Tech Stack & Tools</h2>
          <div class="card" style="text-align: center;">
            <p align="center">
              <img src="https://skillicons.dev/icons?i=py,js,ts,react,nextjs,html,css,tailwind,nodejs,express,mongodb,mysql,git,github,docker,aws,linux,figma&perline=6" alt="My Skills" />
            </p>
          </div>
        </section>
      </div>
`
  },

  "resume": {
    title: "resume.md",
    icon: "file-text",
    language: "markdown",
    breadcrumb: ["resume.md"],
    content: `
      <div class="doc-content">
        <div class="resume-header">
          <h1>Yash Date</h1>
          <p class="resume-subtitle">AI/ML Enthusiast &amp; Full-Stack Developer</p>
          <div class="resume-contacts">
            <a href="mailto:yashdate31@gmail.com" class="resume-contact-link">✉ yashdate31@gmail.com</a>
            <a href="https://github.com/YashDate31" class="resume-contact-link" target="_blank">⟡ github.com/YashDate31</a>
            <a href="https://www.linkedin.com/in/yash-vijay-date-a361a8329/" class="resume-contact-link" target="_blank">in LinkedIn</a>
            <a href="https://www.instagram.com/_dy.patil_/" class="resume-contact-link" target="_blank">📸 Instagram</a>
          </div>
          <a href="#" class="download-btn" onclick="showToast('PDF download would be configured here!','info'); return false;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF
          </a>
        </div>

        <div class="resume-section">
          <h2><span class="section-hash">#</span> Summary</h2>
          <p>18-year-old developer passionate about creating innovative solutions. Built advanced systems including Library Management, AI Chatbots, and Educational Portals. Specialized in Full Stack Development, Desktop Applications, and AI Integration.</p>
        </div>

        <div class="resume-section">
          <h2><span class="section-hash">#</span> Experience</h2>
          <div class="resume-timeline">
            <div class="resume-item">
              <div class="resume-item-header">
                <div><h3>Full-Stack Developer</h3><p class="resume-company">Freelance / Self-Employed</p></div>
                <span class="resume-date">2023 – Present</span>
              </div>
              <ul class="resume-list">
                <li>Built and deployed multiple full-stack web applications using React, Node.js, and PostgreSQL</li>
                <li>Integrated AI/LLM capabilities into client projects, improving user engagement by 40%</li>
                <li>Developed REST APIs serving 10k+ requests/day with 99.9% uptime</li>
                <li>Managed complete development lifecycle from requirements to cloud deployment</li>
              </ul>
            </div>
            <div class="resume-item">
              <div class="resume-item-header">
                <div><h3>AI Journalist &amp; Technical Writer</h3><p class="resume-company">Independent / Blog</p></div>
                <span class="resume-date">2022 – Present</span>
              </div>
              <ul class="resume-list">
                <li>Wrote 50+ in-depth articles on AI, machine learning, and developer tools</li>
                <li>Built an audience of 5,000+ monthly readers through consistent technical content</li>
                <li>Covered breakthrough AI research and translated complex concepts for general audiences</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="resume-section">
          <h2><span class="section-hash">#</span> Projects</h2>
          <div class="resume-timeline">
            <div class="resume-item">
              <div class="resume-item-header">
                <div><h3>SmartCafe — Café Management System</h3><p class="resume-company">React · Node.js · PostgreSQL · Socket.io</p></div>
              </div>
              <ul class="resume-list">
                <li>Real-time café POS and management system with live order tracking</li>
                <li>AI-powered inventory predictions reduced waste by 25%</li>
                <li>Analytics dashboard for revenue, peak hours, and customer trends</li>
              </ul>
            </div>
            <div class="resume-item">
              <div class="resume-item-header">
                <div><h3>AI Code Reviewer</h3><p class="resume-company">Python · OpenAI · GitHub API · FastAPI</p></div>
              </div>
              <ul class="resume-list">
                <li>Automated pull request reviews using GPT-4 to detect bugs and suggest improvements</li>
                <li>Integrated with GitHub webhooks for seamless CI/CD pipeline integration</li>
                <li>Reduced code review time by 60% in test environments</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="resume-section">
          <h2><span class="section-hash">#</span> Education</h2>
          <div class="resume-item">
            <div class="resume-item-header">
              <div><h3>Diploma in Computer Engineering</h3><p class="resume-company">Government Polytechnic Awasari (Kh)</p></div>
              <span class="resume-date">3rd Year</span>
            </div>
          </div>
        </div>

        <div class="resume-section">
          <h2><span class="section-hash">#</span> Technical Skills</h2>
          <div class="skills-table">
            <div class="skills-row"><span class="skills-label">Languages</span><span class="skills-val">JavaScript, TypeScript, Python, HTML/CSS</span></div>
            <div class="skills-row"><span class="skills-label">Frontend</span><span class="skills-val">React, Next.js, Astro, Tailwind CSS, Vanilla JS</span></div>
            <div class="skills-row"><span class="skills-label">Backend</span><span class="skills-val">Node.js, Express, FastAPI, REST, GraphQL</span></div>
            <div class="skills-row"><span class="skills-label">Databases</span><span class="skills-val">PostgreSQL, MongoDB, Redis, Supabase, SQLite</span></div>
            <div class="skills-row"><span class="skills-label">AI / ML</span><span class="skills-val">OpenAI API, LangChain, Hugging Face, RAG, Embeddings</span></div>
            <div class="skills-row"><span class="skills-label">DevOps</span><span class="skills-val">Docker, Git, GitHub Actions, Vercel, AWS, Nginx</span></div>
          </div>
        </div>
      </div>
    `
  },

  "projects": {
    title: "projects.md",
    icon: "folder-kanban",
    language: "markdown",
    breadcrumb: ["projects.md"],
    content: `
      <div class="doc-content">
        <h1>Projects</h1>
        <p class="section-lead">A collection of things I've built — from full-stack apps to AI tools and open-source contributions.</p>

        <div class="projects-filter">
          <button class="filter-btn active" onclick="filterProjects(this, 'all')">All</button>
          <button class="filter-btn" onclick="filterProjects(this, 'fullstack')">Full-Stack</button>
          <button class="filter-btn" onclick="filterProjects(this, 'ai')">AI / ML</button>
          <button class="filter-btn" onclick="filterProjects(this, 'tools')">Tools</button>
        </div>

        <div class="projects-grid" id="projects-grid">
          <div class="project-card" data-category="fullstack">
            <div class="project-card-header">
              <span class="project-card-icon">📱</span>
              <div class="project-card-links">
                <a href="https://github.com/YashDate31" target="_blank" title="GitHub">⟡</a>
                <a href="#" target="_blank" title="Live Demo">↗</a>
              </div>
            </div>
            <h3>SmartCafe</h3>
            <p>Full-stack café management system with real-time order tracking, AI-powered inventory predictions, and a comprehensive analytics dashboard.</p>
            <div class="project-card-tags"><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>Socket.io</span></div>
          </div>

          <div class="project-card" data-category="ai">
            <div class="project-card-header">
              <span class="project-card-icon">🧠</span>
              <div class="project-card-links"><a href="https://github.com/YashDate31" target="_blank">⟡</a></div>
            </div>
            <h3>AI Code Reviewer</h3>
            <p>Automated pull request review bot using GPT-4 to detect bugs, enforce style, and suggest improvements. Integrates via GitHub webhooks.</p>
            <div class="project-card-tags"><span>Python</span><span>OpenAI</span><span>GitHub API</span><span>FastAPI</span></div>
          </div>

          <div class="project-card" data-category="tools">
            <div class="project-card-header">
              <span class="project-card-icon">🌐</span>
              <div class="project-card-links"><a href="#" title="Live">↗</a></div>
            </div>
            <h3>Portfolio OS</h3>
            <p>This website — an IDE-inspired developer portfolio built entirely from scratch with Vanilla HTML, CSS, and JavaScript.</p>
            <div class="project-card-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
          </div>

          <div class="project-card" data-category="ai">
            <div class="project-card-header">
              <span class="project-card-icon">🔍</span>
              <div class="project-card-links"><a href="https://github.com/YashDate31" target="_blank">⟡</a></div>
            </div>
            <h3>Doc Semantic Search</h3>
            <p>RAG-based documentation search engine that understands natural language queries using vector embeddings and LLM-powered responses.</p>
            <div class="project-card-tags"><span>Python</span><span>LangChain</span><span>Pinecone</span><span>OpenAI</span></div>
          </div>

          <div class="project-card" data-category="fullstack">
            <div class="project-card-header">
              <span class="project-card-icon">📊</span>
              <div class="project-card-links"><a href="https://github.com/YashDate31" target="_blank">⟡</a><a href="#" target="_blank">↗</a></div>
            </div>
            <h3>Dev Analytics Dashboard</h3>
            <p>Real-time analytics platform for developers to monitor GitHub activity, streaks, language usage, and contribution patterns.</p>
            <div class="project-card-tags"><span>Next.js</span><span>GitHub API</span><span>Chart.js</span><span>Redis</span></div>
          </div>

          <div class="project-card" data-category="tools">
            <div class="project-card-header">
              <span class="project-card-icon">⚡</span>
              <div class="project-card-links"><a href="https://github.com/YashDate31" target="_blank">⟡</a></div>
            </div>
            <h3>CLI Task Manager</h3>
            <p>A powerful command-line task manager with natural language parsing, priority scoring, and device sync via a JSON API.</p>
            <div class="project-card-tags"><span>Node.js</span><span>Commander.js</span><span>SQLite</span></div>
          </div>
        </div>
      </div>
    `
  },

  "contact": {
    title: "contact.mdx",
    icon: "mail",
    language: "mdx",
    breadcrumb: ["contact.mdx"],
    content: `
      <div class="doc-content">
        <h1>Contact</h1>
        <p class="section-lead">Have a project in mind or just want to say hello? I'd love to hear from you.</p>

        <div class="contact-grid">
          <div class="contact-form-area">
            <h2><span class="section-hash">#</span> Send a Message</h2>
            <form class="contact-form" onsubmit="handleContact(event)">
              <div class="form-group">
                <label for="contact-name">Name</label>
                <input type="text" id="contact-name" placeholder="Your full name" required />
              </div>
              <div class="form-group">
                <label for="contact-email">Email</label>
                <input type="email" id="contact-email" placeholder="your@email.com" required />
              </div>
              <div class="form-group">
                <label for="contact-subject">Subject</label>
                <input type="text" id="contact-subject" placeholder="What's this about?" />
              </div>
              <div class="form-group">
                <label for="contact-msg">Message</label>
                <textarea id="contact-msg" rows="5" placeholder="Tell me about your project or idea..." required></textarea>
              </div>
              <button type="submit" class="btn-primary" style="width:100%;justify-content:center;">Send Message ✉️</button>
            </form>
          </div>
          <div class="contact-links-area">
            <h2><span class="section-hash">#</span> Find Me Online</h2>
            <div class="contact-links">
              <a href="mailto:yashdate31@gmail.com" class="contact-link-card">
                <div class="contact-link-icon">✉️</div>
                <div><strong>Email</strong><p>yashdate31@gmail.com</p></div>
              </a>
              <a href="https://github.com/YashDate31" target="_blank" class="contact-link-card">
                <div class="contact-link-icon">⟡</div>
                <div><strong>GitHub</strong><p>github.com/YashDate31</p></div>
              </a>
              <a href="https://twitter.com/" target="_blank" class="contact-link-card">
                <div class="contact-link-icon">𝕏</div>
                <div><strong>Twitter / X</strong><p>@_dy.patil_</p></div>
              </a>
              <a href="https://linkedin.com/" target="_blank" class="contact-link-card">
                <div class="contact-link-icon" style="font-size:12px;font-weight:800;">in</div>
                <div><strong>LinkedIn</strong><p>linkedin.com/in/yash-vijay-date-a361a8329</p></div>
              </a>
            </div>
            <div class="availability-card">
              <span class="avail-dot"></span>
              <div>
                <strong>Available for work</strong>
                <p>Open to freelance projects, full-time roles, and collaborations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  "achievements": {
    title: "achievements.md",
    icon: "trophy",
    language: "markdown",
    breadcrumb: ["achievements.md"],
    content: `
      <div class="doc-content">
        <h1>🏆 Achievements & Certifications</h1>
        
        <div class="timeline">
          
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>First Place - National AI Hackathon</h3>
              <div class="timeline-date">August 2024</div>
              <p>Built an AI-powered document analyzer that processes unstructured data 10x faster than traditional methods. Won 1st place out of 500+ teams.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>AWS Certified Solutions Architect</h3>
              <div class="timeline-date">May 2024</div>
              <p>Successfully passed the AWS Certified Solutions Architect - Associate exam, demonstrating proficiency in designing distributed systems on AWS.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>100 Days of Code Challenge</h3>
              <div class="timeline-date">January 2024</div>
              <p>Completed the 100 days of code challenge, focusing on advanced Python, machine learning algorithms, and full-stack React development.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>Published Article on Techify</h3>
              <div class="timeline-date">November 2023</div>
              <p>Wrote a comprehensive guide on implementing Next.js with MongoDB that received over 10,000 views in the first month.</p>
            </div>
          </div>

        </div>
      </div>
`
  },

  "vlogs": {
    title: "vlogs.md",
    icon: "video",
    language: "markdown",
    breadcrumb: ["vlogs.md"],
    content: `
      <div class="doc-content">
        <h1>Vlogs &amp; Videos</h1>
        <p class="section-lead">Building in public, learning in the open. Follow my journey through AI, development, and tech.</p>
        <div class="vlogs-grid">
          <div class="vlog-card">
            <div class="vlog-thumb"><div class="vlog-play">▶</div><span class="vlog-duration">12:34</span></div>
            <div class="vlog-info">
              <span class="vlog-category">AI</span>
              <h3>Building a RAG System from Scratch</h3>
              <p>I built a production-ready retrieval-augmented generation system using LangChain and Pinecone. Here's everything I learned.</p>
              <span class="vlog-date">June 2026</span>
            </div>
          </div>
          <div class="vlog-card">
            <div class="vlog-thumb" style="background: linear-gradient(135deg, #1a1e2a, #0a0d14)"><div class="vlog-play">▶</div><span class="vlog-duration">8:47</span></div>
            <div class="vlog-info">
              <span class="vlog-category">Dev</span>
              <h3>Full-Stack App in 24 Hours</h3>
              <p>A time-lapse and breakdown of how I built and shipped a complete web application in under 24 hours.</p>
              <span class="vlog-date">May 2026</span>
            </div>
          </div>
          <div class="vlog-card">
            <div class="vlog-thumb" style="background: linear-gradient(135deg, #1e1a2a, #100d14)"><div class="vlog-play">▶</div><span class="vlog-duration">15:20</span></div>
            <div class="vlog-info">
              <span class="vlog-category">Career</span>
              <h3>My Self-Taught Developer Journey</h3>
              <p>How I went from a CS student to a working developer — the resources, projects, and mindset that made the difference.</p>
              <span class="vlog-date">April 2026</span>
            </div>
          </div>
        </div>
        <div class="subscribe-card">
          <h2>📺 Subscribe for More</h2>
          <p>I post weekly videos about AI, web development, and building things on the internet.</p>
          <a href="#" class="btn-primary" target="_blank">Subscribe on YouTube</a>
        </div>
      </div>
    `
  },

  "privacy": {
    title: "privacy.md",
    icon: "shield",
    language: "markdown",
    breadcrumb: ["privacy.md"],
    content: `
      <div class="doc-content">
        <h1>Privacy Policy</h1>
        <p class="section-lead">Last updated: June 2026</p>
        <div class="prose">
          <h2><span class="section-hash">#</span> Overview</h2>
          <p>This portfolio website does not collect any personal data beyond what you voluntarily provide through the contact form. No invasive tracking cookies, no behavioral analytics scripts.</p>
          <h2><span class="section-hash">#</span> What We Collect</h2>
          <ul>
            <li><strong>Contact form data:</strong> Name, email, and message — used only to respond to your inquiry.</li>
            <li><strong>Basic server logs:</strong> IP address and page requests, retained for 30 days for security purposes.</li>
          </ul>
          <h2><span class="section-hash">#</span> What We Don't Do</h2>
          <ul>
            <li>We don't sell your data to third parties.</li>
            <li>We don't use invasive tracking or behavioral advertising.</li>
            <li>We don't store more data than necessary.</li>
          </ul>
          <h2><span class="section-hash">#</span> Contact</h2>
          <p>For any privacy concerns, email <a href="mailto:yashdate31@gmail.com">yashdate31@gmail.com</a>.</p>
        </div>
      </div>
    `
  },

  "settings": {
    title: "settings.json",
    icon: "settings",
    language: "json",
    breadcrumb: ["settings.json"],
    content: `
      <div class="settings-page" id="settings-page">

        <div class="settings-header">
          <h1>⚙️ Settings</h1>
          <p>Customize your Portfolio OS experience — themes, fonts, and display preferences.</p>
        </div>

        <!-- ---- Themes ---- -->
        <div class="settings-section">
          <div class="settings-section-title">Color Theme</div>
          <div class="theme-grid" id="theme-grid">

            <div class="theme-card" data-theme="dark-plus" onclick="applyTheme('dark-plus', this)">
              <div class="theme-active-check">✓</div>
              <div class="theme-preview" style="background:#0d1117">
                <div class="theme-preview-sidebar" style="background:#010409"></div>
                <div class="theme-preview-main" style="background:#0d1117">
                  <div class="theme-preview-titlebar" style="background:#0d1117; border-bottom:1px solid #30363d"></div>
                  <div class="preview-line" style="background:#388bfd;width:55%"></div>
                  <div class="preview-line preview-line-sm" style="background:#3fb950"></div>
                  <div class="preview-line preview-line-xs" style="background:#8b949e"></div>
                  <div class="preview-line" style="background:#30363d;width:70%"></div>
                </div>
              </div>
              <div class="theme-info">
                <span class="theme-name">GitHub Dark</span>
                <span class="theme-type">dark</span>
              </div>
            </div>

            <div class="theme-card" data-theme="one-dark" onclick="applyTheme('one-dark', this)">
              <div class="theme-active-check">✓</div>
              <div class="theme-preview" style="background:#21252b">
                <div class="theme-preview-sidebar" style="background:#1c2026"></div>
                <div class="theme-preview-main" style="background:#21252b">
                  <div class="theme-preview-titlebar" style="background:#282c34; border-bottom:1px solid #3e4451"></div>
                  <div class="preview-line" style="background:#61afef;width:55%"></div>
                  <div class="preview-line preview-line-sm" style="background:#98c379"></div>
                  <div class="preview-line preview-line-xs" style="background:#5c6370"></div>
                  <div class="preview-line" style="background:#3e4451;width:70%"></div>
                </div>
              </div>
              <div class="theme-info">
                <span class="theme-name">One Dark Pro</span>
                <span class="theme-type">dark</span>
              </div>
            </div>

            <div class="theme-card" data-theme="dracula" onclick="applyTheme('dracula', this)">
              <div class="theme-active-check">✓</div>
              <div class="theme-preview" style="background:#282a36">
                <div class="theme-preview-sidebar" style="background:#191a21"></div>
                <div class="theme-preview-main" style="background:#282a36">
                  <div class="theme-preview-titlebar" style="background:#191a21; border-bottom:1px solid #44475a"></div>
                  <div class="preview-line" style="background:#bd93f9;width:55%"></div>
                  <div class="preview-line preview-line-sm" style="background:#50fa7b"></div>
                  <div class="preview-line preview-line-xs" style="background:#6272a4"></div>
                  <div class="preview-line" style="background:#44475a;width:70%"></div>
                </div>
              </div>
              <div class="theme-info">
                <span class="theme-name">Dracula</span>
                <span class="theme-type">dark</span>
              </div>
            </div>

            <div class="theme-card" data-theme="catppuccin" onclick="applyTheme('catppuccin', this)">
              <div class="theme-active-check">✓</div>
              <div class="theme-preview" style="background:#1e1e2e">
                <div class="theme-preview-sidebar" style="background:#11111b"></div>
                <div class="theme-preview-main" style="background:#1e1e2e">
                  <div class="theme-preview-titlebar" style="background:#181825; border-bottom:1px solid #313244"></div>
                  <div class="preview-line" style="background:#89b4fa;width:55%"></div>
                  <div class="preview-line preview-line-sm" style="background:#a6e3a1"></div>
                  <div class="preview-line preview-line-xs" style="background:#6c7086"></div>
                  <div class="preview-line" style="background:#313244;width:70%"></div>
                </div>
              </div>
              <div class="theme-info">
                <span class="theme-name">Catppuccin</span>
                <span class="theme-type">dark</span>
              </div>
            </div>

            <div class="theme-card" data-theme="tokyo-night" onclick="applyTheme('tokyo-night', this)">
              <div class="theme-active-check">✓</div>
              <div class="theme-preview" style="background:#1a1b26">
                <div class="theme-preview-sidebar" style="background:#13131a"></div>
                <div class="theme-preview-main" style="background:#1a1b26">
                  <div class="theme-preview-titlebar" style="background:#16161e; border-bottom:1px solid #292e42"></div>
                  <div class="preview-line" style="background:#7aa2f7;width:55%"></div>
                  <div class="preview-line preview-line-sm" style="background:#9ece6a"></div>
                  <div class="preview-line preview-line-xs" style="background:#565f89"></div>
                  <div class="preview-line" style="background:#292e42;width:70%"></div>
                </div>
              </div>
              <div class="theme-info">
                <span class="theme-name">Tokyo Night</span>
                <span class="theme-type">dark</span>
              </div>
            </div>

            <div class="theme-card" data-theme="nord" onclick="applyTheme('nord', this)">
              <div class="theme-active-check">✓</div>
              <div class="theme-preview" style="background:#2e3440">
                <div class="theme-preview-sidebar" style="background:#222731"></div>
                <div class="theme-preview-main" style="background:#2e3440">
                  <div class="theme-preview-titlebar" style="background:#272c37; border-bottom:1px solid #3b4252"></div>
                  <div class="preview-line" style="background:#81a1c1;width:55%"></div>
                  <div class="preview-line preview-line-sm" style="background:#a3be8c"></div>
                  <div class="preview-line preview-line-xs" style="background:#4c566a"></div>
                  <div class="preview-line" style="background:#3b4252;width:70%"></div>
                </div>
              </div>
              <div class="theme-info">
                <span class="theme-name">Nord</span>
                <span class="theme-type">dark</span>
              </div>
            </div>

            <div class="theme-card" data-theme="monokai" onclick="applyTheme('monokai', this)">
              <div class="theme-active-check">✓</div>
              <div class="theme-preview" style="background:#272822">
                <div class="theme-preview-sidebar" style="background:#19191a"></div>
                <div class="theme-preview-main" style="background:#272822">
                  <div class="theme-preview-titlebar" style="background:#1e1f1a; border-bottom:1px solid #3d3e38"></div>
                  <div class="preview-line" style="background:#fd971f;width:55%"></div>
                  <div class="preview-line preview-line-sm" style="background:#a6e22e"></div>
                  <div class="preview-line preview-line-xs" style="background:#75715e"></div>
                  <div class="preview-line" style="background:#3d3e38;width:70%"></div>
                </div>
              </div>
              <div class="theme-info">
                <span class="theme-name">Monokai</span>
                <span class="theme-type">dark</span>
              </div>
            </div>

            <div class="theme-card active" data-theme="light" onclick="applyTheme('light', this)">
              <div class="theme-active-check" style="background:#0969da">✓</div>
              <div class="theme-preview" style="background:#ffffff">
                <div class="theme-preview-sidebar" style="background:#f0f2f4"></div>
                <div class="theme-preview-main" style="background:#ffffff">
                  <div class="theme-preview-titlebar" style="background:#f6f8fa; border-bottom:1px solid #d0d7de"></div>
                  <div class="preview-line" style="background:#0969da;width:55%"></div>
                  <div class="preview-line preview-line-sm" style="background:#1a7f37"></div>
                  <div class="preview-line preview-line-xs" style="background:#9198a1"></div>
                  <div class="preview-line" style="background:#d0d7de;width:70%"></div>
                </div>
              </div>
              <div class="theme-info" style="background:#f6f8fa">
                <span class="theme-name" style="color:#1f2328">GitHub Light</span>
                <span class="theme-type" style="color:#656d76">light</span>
              </div>
            </div>

          </div>
        </div>

        <!-- ---- Font Size ---- -->
        <div class="settings-section">
          <div class="settings-section-title">Editor Preferences</div>

          <div class="setting-row">
            <div class="setting-info">
              <div class="setting-label">Font Size</div>
              <div class="setting-desc">Controls the font size of the content area</div>
            </div>
            <div class="setting-control">
              <div class="size-stepper">
                <button class="size-btn" onclick="changeFontSize(-1)">−</button>
                <span class="size-value" id="font-size-val">14px</span>
                <button class="size-btn" onclick="changeFontSize(1)">+</button>
              </div>
            </div>
          </div>

          <div class="setting-row">
            <div class="setting-info">
              <div class="setting-label">Smooth Scrolling</div>
              <div class="setting-desc">Enables smooth scroll behavior in the editor area</div>
            </div>
            <div class="setting-control">
              <button class="toggle-switch on" id="toggle-smooth" onclick="toggleSetting(this, 'smoothScroll')">
                <div class="toggle-knob"></div>
              </button>
            </div>
          </div>

          <div class="setting-row">
            <div class="setting-info">
              <div class="setting-label">Show Status Bar</div>
              <div class="setting-desc">Toggles the bottom status bar visibility</div>
            </div>
            <div class="setting-control">
              <button class="toggle-switch on" id="toggle-statusbar" onclick="toggleSetting(this, 'statusBar')">
                <div class="toggle-knob"></div>
              </button>
            </div>
          </div>

          <div class="setting-row">
            <div class="setting-info">
              <div class="setting-label">Compact Sidebar</div>
              <div class="setting-desc">Reduces sidebar width for more editor space</div>
            </div>
            <div class="setting-control">
              <button class="toggle-switch" id="toggle-compact" onclick="toggleSetting(this, 'compact')">
                <div class="toggle-knob"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- ---- About ---- -->
        <div class="settings-section">
          <div class="settings-section-title">About Portfolio OS</div>
          <div class="setting-row">
            <div class="setting-info">
              <div class="setting-label">Version</div>
              <div class="setting-desc">Portfolio OS v2.0 — Built with Vanilla HTML, CSS &amp; JavaScript</div>
            </div>
            <div class="setting-control">
              <span style="font-family:var(--font-mono);font-size:12px;color:var(--accent)">v2.0.0</span>
            </div>
          </div>
          <div class="setting-row">
            <div class="setting-info">
              <div class="setting-label">Reset to Defaults</div>
              <div class="setting-desc">Restore all settings to their default values</div>
            </div>
            <div class="setting-control">
              <button class="btn-secondary" style="font-size:12px;padding:6px 14px" onclick="resetSettings()">Reset</button>
            </div>
          </div>
        </div>

      </div>
    `
  }
};
