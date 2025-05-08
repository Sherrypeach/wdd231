const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "CSE 121b", name: "JavaScript Language", credits: 3, completed: false },
    // more...
  ];
  
  function renderCourses(filter = "all") {
    let filtered = courses;
    if (filter === "wdd") filtered = courses.filter(c => c.code.startsWith("WDD"));
    if (filter === "cse") filtered = courses.filter(c => c.code.startsWith("CSE"));
  
    const container = document.getElementById("courses");
    container.innerHTML = "";
  
    let total = 0;
    filtered.forEach(course => {
      const card = document.createElement("div");
      card.className = `course ${course.completed ? "completed" : "incomplete"}`;
      card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>${course.credits} credits</p>`;
      container.appendChild(card);
      total += course.credits;
    });
  
    document.getElementById("credit-count").textContent = total;
  }
  
  document.getElementById("allBtn").addEventListener("click", () => renderCourses("all"));
  document.getElementById("wddBtn").addEventListener("click", () => renderCourses("wdd"));
  document.getElementById("cseBtn").addEventListener("click", () => renderCourses("cse"));
  
  window.addEventListener("load", () => renderCourses());
  