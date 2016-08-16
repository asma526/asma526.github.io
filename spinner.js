<script type="text/javascript">	
		var reds= [22, 41, 52, 243, 211, 192];
		var greens=[160, 128, 73, 156, 84, 57];
		var blues= [133, 185, 94, 18, 0, 43];


		var svgns = "http://www.w3.org/2000/svg"; // SVG Namespace (in case we need it)
		var slices = []; // Array of wheel slice objects
		var numSlices = 6;  // Size of the circle slices
		var isSpinning = false; // Is the arrow spinning?
		var rotation = 0; // Arrow rotation
		var currentSlice = 0; // Current slice the arrow is over
		var wheel; // DOM Object for the spinner board
		var arrow; // DOM Object for the spinner arrow
		var spinButton; // DOM Object for the spin wheel <button>
		
		// Basic wheel "slice" object for drawing SVG
		function Slice(num, parent) {
			// Set instance vars
			this.parent = parent;
			this.size = 360/numSlices;
			this.offset = num * this.size;
			this.id = "slice_"+num;
			// Draw the object
			this.object = this.create();
			this.parent.appendChild(this.object);
			this.className = "fa fa-money";
		}

		Slice.prototype = {
			create:function() {
				// Create a group to store the slice in
				var g = document.createElementNS(svgns, "g");
				// Create the slice object
				var slice = document.createElementNS(svgns, "path");
				slice.setAttributeNS(null, "id", this.id);
				var x1 = 200 + 180 * Math.cos(Math.PI*(-90+this.offset)/180);
				var y1 = 200 + 180 * Math.sin(Math.PI*(-90+this.offset)/180);
				var x2 = 200 + 180 * Math.cos(Math.PI*(-90+this.size+this.offset)/180);
				var y2 = 200 + 180 * Math.sin(Math.PI*(-90+this.size+this.offset)/180);
				slice.setAttributeNS(null, "d", "M 200 200 L "+x1+" "+y1+" A 180 180 0 0 1 "+x2+" "+y2+"  Z");
				// Randomize the color of the slice and finish styling
				// var red = Math.floor(Math.random() * 215) + 20;
				// var green = Math.floor(Math.random() * 215) + 20;
				// var blue = Math.floor(Math.random() * 215) + 20;
				var red = reds.shift();
				var green = greens.shift();
				var blue = blues.shift();
			
				// slice.setAttributeNS(null, "fill", "rgb("+red+","+green+","+blue+")");
				slice.setAttributeNS(null, "fill", "rgb("+red+","+green+","+blue+")");
				slice.setAttributeNS(null, "stroke", "#222222");
				slice.setAttributeNS(null, "style", "stroke-width:2px");
				// Add the slice to the group
				g.appendChild(slice);
				// Create the highlight for the slice
				var overlay = document.createElementNS(svgns, "path");
				overlay.setAttributeNS(null, "d", "M 200 200 L "+x1+" "+y1+" A 180 180 0 0 1 "+x2+" "+y2+"  Z");
				overlay.setAttributeNS(null, "fill", "#ffffff");
				overlay.setAttributeNS(null, "stroke", "#222222");
				overlay.setAttributeNS(null, "style", "stroke-width:1px");
				overlay.setAttributeNS(null, "opacity", "0");
				// Add the highlight for the slice to the group
				g.appendChild(overlay);
				return g;
			},
			toggleOverlay:function() {
				var overlay = this.object.childNodes[1];
				if (overlay.getAttribute("opacity") == 0) {
					overlay.setAttributeNS(null, "opacity", 1);
				}
				else {
					overlay.setAttributeNS(null, "opacity", 0);
				}
			}
		};

		// Toggle the spinning of the wheel
		function toggleSpinning() {
			// Toggle the spinning animation
			if (isSpinning) {
				// Stop the arrow
				isSpinning = false;
				clearInterval(toggleSpinning.spinInt);
				spinButton.removeAttribute("disabled");
			}
			else {
				// Start spinning the arrow
				isSpinning = true;
				toggleSpinning.spinInt = setInterval(spinWheel, 1000/60);
				// Set how long the wheel will be spinning
				var duration = Math.floor(Math.random() * 2000) + 1000;
				setTimeout(toggleSpinning, duration);
				// Disable the spin button
				spinButton.setAttribute("disabled", "true");
			}
		}

		// Animation step for spinning the wheel arrow
		function spinWheel() {
			// Rotate the spinner arrow
			rotation = (rotation + 12) % 360;
			arrow.setAttributeNS(null, "transform", "rotate("+rotation+",200,200)");
			// Highlight the slice the arrow is above
			var newSlice = Math.floor(rotation / (360/numSlices));
			if (newSlice != currentSlice) {
				slices[currentSlice].toggleOverlay();
				slices[newSlice].toggleOverlay();
				currentSlice = newSlice;
			}
			window.document.getElementById("lastslice").innerHTML=currentSlice;

			window.document.getElementById("slice_3").innerHTML=currentSlice;



		}
		// Document ready event
		document.addEventListener("DOMContentLoaded", function() {
			// Get a handle to all necessary DOM elements
			wheel = document.getElementById("spinner-board"); // DOM Object for the spinner board
			arrow = document.getElementById("spinner-arrow"); // DOM Object for the spinner arrow
			spinButton = document.getElementById("spinner-button"); // DOM Object for the spin wheel <button>
			// Generate the wheel sections
			for (var i = 0; i < numSlices; i++) {
				slices[i] = new Slice(i, wheel);
			}
			// Highlight the first slice
			slices[0].toggleOverlay();
		}, false);
	</script>