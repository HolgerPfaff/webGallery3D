requirejs(["engine", "room1", "room2", "room3", "jquery-2.2.0.min"], function (engine, room1, room2, room3) {

	$(document).ready(function() {
	
		// initialize the renderer
		engine.init();

		

		// Set the callback which gets executed when room1 is left
		room1.setLeaveCallback(function (door) {
			console.log("Leaving room 1 through door " + door);
			room3.enter(0);
		});

		// Set the callback which gets executed when room2 is left
		room2.setLeaveCallback(function (door) {
			console.log("Leaving room 2 through door " + door);
			room3.enter(1);
		});

	    // Set the callback which gets executed when room2 is left
		room3.setLeaveCallback(function (door) {
		    console.log("Leaving room 3 through door " + door);

		    if (door === 0) {
		        room1.enter(0);
		    } else {
		        room2.enter(0);
		    }

		    
		});

		// Start the animation
		engine.run();

		// Load room1
		room1.enter();
	});
});