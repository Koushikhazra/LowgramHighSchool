document.addEventListener('DOMContentLoaded', function() {
    // Common functionality
    document.querySelector('.current-year').textContent = new Date().getFullYear();
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize default tab
    openProgram('upper-primary');
});

// Notification filter functionality
function filterNotifications() {
    const typeFilter = document.getElementById('notification-type').value;
    const monthFilter = document.getElementById('notification-month').value;
    const notifications = document.querySelectorAll('.notification-card');
    
    notifications.forEach(notification => {
        const notificationType = notification.classList[1];
        const notificationMonth = notification.querySelector('.month').textContent.toLowerCase();
        
        const typeMatch = typeFilter === 'all' || notificationType === typeFilter;
        const monthMatch = monthFilter === 'all' || notificationMonth.includes(monthFilter);
        
        if (typeMatch && monthMatch) {
            notification.style.display = 'flex';
        } else {
            notification.style.display = 'none';
        }
    });
}

// Tab functionality
function openProgram(programName, clickedElement = null) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Deactivate all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activate the selected tab
    document.getElementById(programName).classList.add('active');
    const activeBtn = clickedElement || document.querySelector(`[onclick*="${programName}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

// Stream functionality (if needed)
function openStream(streamName, event) {
    if (event) {
        const streamContents = document.querySelectorAll(".stream-content");
        const streamBtns = document.querySelectorAll(".stream-btn");
        
        streamContents.forEach(content => content.classList.remove("active"));
        streamBtns.forEach(btn => btn.classList.remove("active"));
        
        document.getElementById(streamName).classList.add("active");
        event.currentTarget.classList.add("active");
    }
}