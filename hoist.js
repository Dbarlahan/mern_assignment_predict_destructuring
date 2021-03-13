// 1)
    console.log(hello);                                   
    var hello = 'world';                                 

    // var hello;
    // console.log(hello); // logs undefined
    // hello = 'world';

// 2)
    var needle = 'haystack';
    test();
    function test() {
        var needle = 'magnet';
        console.log(needle);
    }

    // function test () {
    //     var needle = 'magnet';
    //     console.log(needle); // logs magnet
    // }
    // var needle;
    // 'needle' = 'haystack';
    // test();

// 3)
    var brendan = 'super cool';
    function print() {
        brendan = 'only okay';
        console.log(brendan);
    }
    print()
    console.log(brendan);

    // function print() {
    //     brendan = 'only okay';
    //     console.log(brendan); // logs 'only okay'
    // }
    // var brendan;
    // brendan = 'super cool';
    // print()
    // console.log(brendan); // logs 'only okay'

// 4)
    var food = 'chicken';
    console.log(food);
    eat();
    function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }

    // function eat(){
    //     var food;
    //     food = 'half-chicken';
    //     console.log(food); // logs 'half-chicken'
    //     var food = 'gone';
    // }
    // var food;
    // food = 'chicken';
    // console.log(food); // logs chicken
    // eat();

// 5)
    mean();
    console.log(food);
    var mean = function() {
        food = "chicken";
        console.log(food);
        var food = "fish";
        console.log(food);
    }
    console.log(food);

    // var mean; // only var is hoisted
    // mean();
    // console.log(food);
    // mean = function() { // equals acts as an anchor
    //     var food;
    //     food = "chicken";
    //     console.log(food);
    //     food = "fish";
    //     console.log(food);
    // }
    // console.log(food);

    // TypeError: mean is not a function

// 6)
    console.log(genre);
    var genre = "disco";
    rewind();
    function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
    }
    console.log(genre);

    // function rewind() {
    //     var genre;
    //     genre = "rock";
    //     console.log(genre); // logs rock
    //     genre = "r&b";
    //     console.log(genre); // logs r&b
    // }
    // var genre;
    // console.log(genre); // logs undefined
    // genre = "disco";
    // rewind();
    // console.log(genre); // logs disco

// 7)
    dojo = "san jose";
    console.log(dojo);
    learn();
    function learn() {
        console.log(dojo);
        dojo = "seattle";
        console.log(dojo);
        var dojo = "burbank";
        console.log(dojo);
    }
    console.log(dojo);

    // function learn() {
    //     var dojo;
    //     console.log(dojo); // logs undefined
    //     dojo = "seattle";
    //     console.log(dojo); // logs seattle
    //     dojo = "burbank";
    //     console.log(dojo); // logs burbank
    // }
    // dojo = "san jose";
    // console.log(dojo); // logs san jose
    // learn();
    // console.log(dojo); // logs san jose

// 8) Bonus ES6: const
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }

    // function makeDojo(name, students){
    //     const dojo = {};
    //     dojo.name = name;
    //     dojo.students = students;
    //     if(dojo.students > 50){
    //         dojo.hiring = true;
    //     }
    //     else if(dojo.students <= 0){
    //         dojo = "closed for now";
    //     }
    //     return dojo;
    // }
    // console.log(makeDojo("Chicago", 65));
    // console.log(makeDojo("Berkeley", 0));

    // TypeError: Assignment to constant variable.