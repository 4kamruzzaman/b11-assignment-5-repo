
function changeBackground() {
    const colors = [
        '#FF6633',
        '#FFB399',
        '#FF33FF',
        '#FFFF99',
        '#00B3E6',
        '#3366E6',
        '#999966',
        '#99FF99',
        '#B34D4D',
        '#80B300',
        '#809900',
        '#E6B3B3',
        '#6680B3',
        '#66991A',
        '#FF99E6',
        '#CCFF1A',
        '#FF1A66',
        '#E6331A',
        '#33FFCC',
        '#66994D',
        '#B366CC',
        '#4D8000',
        '#B33300',
        '#CC80CC',
        '#66664D',
        '#991AFF',
        '#E666FF',
        '#4DB3FF',
        '#1AB399',
        '#E666B3',
        '#33991A',
        '#CC9999',
        '#B3B31A',
        '#00E680',
        '#4D8066',
        '#809980',
        '#E6FF80',
        '#1AFF33',
        '#999933',
        '#FF3380',
        '#CCCC00',
        '#66E64D',
        '#4D80CC',
        '#9900B3',
        '#E64D66',
        '#4DB380',
        '#FF4D4D',
        '#99E6E6',
        '#6666FF',
    ];
    const rndColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = rndColor;
}

function clearHistory() {
    document.getElementById('activityLog').innerHTML = '';
}

function completeTask(event) {
    const dom = event.target;
    const taskContainer = dom.closest('.bg-bgcolor');

    if (taskContainer) {
        const taskTitle = taskContainer.querySelector('#taskTitle');

        if (taskTitle) {
            const taskTitleText = taskTitle.innerText;

            // Adding the task to the activity log
            const activityLog = document.getElementById('activityLog');
            const newActivity = document.createElement('div');
            newActivity.classList.add('bg-bgcolor', 'px-4', 'py-2', 'mb-4', 'rounded-lg');
            newActivity.innerHTML = 'You have completed the task <u>' + taskTitleText + '</u> at ' + new Date().toLocaleTimeString();
            activityLog.appendChild(newActivity);

            // Disabling the button
            dom.setAttribute('disabled', true);
        } else {
            console.error('Could not find taskTitle!');
        }
    } else {
        console.error('Could not find taskContainer!');
    }
}
