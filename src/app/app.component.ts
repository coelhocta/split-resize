import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  ngOnInit() {
				function dragElement( element, direction)
{
    let   md; // remember mouse down info
    const first  = document.getElementById('first');
    const second = document.getElementById('second');

    element.onmousedown = onMouseDown;

    function onMouseDown( e )
    {
	document.body.style['pointer-events'] = 'none';
	// console.log("mouse down: " + e.clientX);
	md = {e,
	      offsetLeft:  element.offsetLeft,
	      offsetTop:   element.offsetTop,
	      firstWidth:  first.offsetWidth,
	      secondWidth: second.offsetWidth};
	document.onmousemove = onMouseMove;
	document.onmouseup = () => {
	document.body.style['pointer-events'] = 'auto';
	    // console.log("mouse up");
	document.onmousemove = document.onmouseup = null;
	}
    }

    function onMouseMove( e )
    {
	// console.log("mouse move: " + e.clientX);
	var delta = {x: e.clientX - md.e.x,
		     y: e.clientY - md.e.y};

	if (direction === 'H' ) // Horizontal
	{
	    // prevent negative-sized elements
	    delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
			       md.secondWidth);

	    element.style.left = md.offsetLeft + delta.x + 'px';
	    first.style.width = (md.firstWidth + delta.x) + 'px';
	    second.style.width = (md.secondWidth - delta.x) + 'px';
	}
    }
}
dragElement( document.getElementById('separator'), 'H' );
	}
}
