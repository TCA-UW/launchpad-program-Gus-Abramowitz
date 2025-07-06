let homie = {
    name: "Arty",
    grades: [94, 46, 56, 104, 87, 88, 3]
};

function average(grades) {
    let sum = 0;
    for (let grade of grades) {
        sum += grade;
    }
    return sum / grades.length
};

function letter(grades) {
    let avg = average(grades);
    if (avg >= 90)
        return "Congrats its an A";
    else if (avg >= 80)
        return "Nice its a B";
    else if (avg >= 70)
        return "Meh you got a C";
    else if (avg >= 60)
        return "Oh brother its a D";
    else
        return "You're a failure";
};

function getmax(grades) {
    let max = grades[0];
    for (let value of grades) {
        if (value > max) {
            max = value;
        }
    }
    return max;
};

function Summary() {
    console.log(homie.name + "'s Grade Report:")
    console.log(average(homie.grades));
    console.log(letter(homie.grades));
    console.log(getmax(homie.grades));
};

Summary();