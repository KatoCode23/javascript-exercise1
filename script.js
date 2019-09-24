console.log('Hello Kato!!!');

var gym = [];


function createGym (name, muscle, cost) {
    var equipment = {};
    equipment.name = name;
    equipment.muscle = muscle;
    equipment.cost = cost;
    gym.push(equipment);
}    


createGym('Squat Rack', 'Total Body', 2000);
createGym('Benchpress', 'Chest', 1000);
createGym('Deadlift Station', 'Total Body', 800);
createGym('Dumbbells', 'Total Body', 5000);
createGym('Dumbbell Rack', 'none',  500);
createGym('Stability Balls', 'Total Body',  200);

console.log(gym);


var familyTree = [
    {
        name: 'Kalen',
        age: 37,
        coder: true,
        relationship: 'self',
        location: 'New York, NY',
        children: false
    },

    {
        name: 'Kimberlee',
        age: 57,
        coder: false,
        relationship: 'mom',
        location: 'Long Beach, CA',
        children: false
    },

    {
        name: 'Kenneth',
        age: 59,
        coder: true,
        relationship: 'dad',
        location: 'Long Beach, CA',
        children: false
    },

    {
        name: 'Michelle',
        age: 36,
        coder: false,
        relationship: 'sister',
        location: 'Oakland, CA',
        children: 
        [
            {
                name: 'Tristen',
                age: 7,
                coder: false,
                relationship: 'nephew',
                location: 'Oakland, CA',
                children: false 
            },
            
            {
                name: 'Liam',
                age: 7,
                coder: false,
                relationship: 'nephew',
                location: 'Oakland, CA',
                children: false 
            } 
        ]
    },

    {
        name: 'Keara',
        age: 36,
        coder: false,
        relationship: 'sister',
        location: 'Oakland, CA',
        children: 
        [
            {
                name: 'Kennedy',
                age: 3,
                coder: false,
                relationship: 'niece',
                location: 'Hollywood, CA',
                children: false 
            },
            
            {
                name: 'King',
                age: 1,
                coder: false,
                relationship: 'nephew',
                location: 'Hollywood, CA',
                children: false 
            }
        ]
    },

    {
        name: 'Keylee',
        age: 36,
        coder: false,
        relationship: 'sister',
        location: 'Oakland, CA',
        children: 
            {
                name: 'Rylee',
                age: 8,
                coder: false,
                relationship: 'niece',
                location: 'Lakewood, CA',
                children: false 
            } 
    }
];

console.log(familyTree);

var robotList = [];
function createRobot (name, offspring) {
    var robot = {}; 
    robot.name = name;
    robot.offspring = offspring;
    robotList.push(robot);
}

createRobot('Kato', [
    {
    name: 'Kato jr.',
    age: 4,
    coder: true,
    location: 'The Moon'
    }

]);

console.log(robotList);

