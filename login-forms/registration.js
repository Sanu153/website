function handleCheckboxClick(clickedCheckboxId) {
    const checkboxes = document.querySelectorAll('input[name="checkboxGroup"]');

    checkboxes.forEach(checkbox => {
        document.querySelector('.choosing-text').style.display = 'none'
        if (checkbox.id !== clickedCheckboxId) {
            checkbox.checked = false; // Uncheck other checkboxes
        }
    });

    // Additional code for your checkbox functionality if needed
    // ...
}

const buttons = document.querySelectorAll('input[name = "checkboxGroup"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        showForm(button.id)
    })
})

function showForm(userType) {
    const studentForm = document.querySelector('.student-form');
    const institutionForm = document.querySelector('.institution-form');

    if (userType === 'student') {
        studentForm.style.display = 'grid';
        institutionForm.style.display = 'none';
    } else if (userType === 'institution') {
        studentForm.style.display = 'none';
        institutionForm.style.display = 'grid';

    }
    // Reset styles for both radio buttons and images
    document.getElementById('student').classList.remove('glow');
    document.getElementById('institution').classList.remove('glow');
    document.getElementById('studentImage').classList.remove('glow');
    document.getElementById('institutionImage').classList.remove('glow');

    document.getElementById('student').classList.remove('dull');
    document.getElementById('institution').classList.remove('dull');
    document.getElementById('studentImage').classList.remove('dull');
    document.getElementById('institutionImage').classList.remove('dull');

    // Apply glow and dull effect to the selected radio button and image
    document.getElementById(userType).classList.add('glow');
    document.getElementById(userType + 'Image').classList.add('glow');

    // Apply dull effect to the unselected radio button and image
    const otherUserType = (userType === 'student') ? 'institution' : 'student';
    document.getElementById(otherUserType).classList.add('dull');
    document.getElementById(otherUserType + 'Image').classList.add('dull');
}


function openNewPage() {
    window.location.href = 'Thankyou-page.html';
}


var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count = 2,
    size = 7,
    constantSize = 7, // Constant size for bubbles
    speed = 20,
    parts = new Array,
    colors = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
        parts[i] = {
            x: Math.ceil(Math.random() * w),
            y: Math.ceil(Math.random() * h),
            toX: Math.random() * 5 - 1,
            toY: Math.random() * 2 - 1,
            c: colors[Math.floor(Math.random() * colors.length)],
            size: constantSize // Set a constant size for all bubbles
        };
    }
}

function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener('mousemove', MouseMove, false);
    for (var i = 0; i < arc; i++) {
        var li = parts[i];
        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        if (i % 2 == 0)
            ctx.stroke();
        else
            ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) {
            li.x = 0;
        }
        if (li.y > h) {
            li.y = 0;
        }
        if (li.x < 0) {
            li.x = w;
        }
        if (li.y < 0) {
            li.y = h;
        }
    }
    if (time < speed) {
        time++;
    }
    setTimeout(particles, 1000 / rate);
}

function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;
}

function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

create();
particles();
