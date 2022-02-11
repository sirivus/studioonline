console.log('hi');
height.onClick;

//code type step building action step
//implement features
//document them
////
//1. resizeable iframe
//7. code hiding secure
//8. payment secure
//2. pause iframe when in background
//3. miniplayer iframe for multitasking
//4. online continuity persistance
//5. open world engine
//6. open world game
////
//&&&&&&

var mainframe = document.getElementById('mainframe')
    requestFullscreen(this)
    console.log(this)

    const heightOutput = document.querySelector('#height');
    const widthOutput = document.querySelector('#width');
    
    function reportWindowSize() {
      heightOutput.textContent = window.innerHeight;
      widthOutput.textContent = window.innerWidth;
    }
    
    window.onresize = reportWindowSize;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.9, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

    animate();

/*
var myLink=document.getElementById('myLink');

myLink.addEventListener('click',function(evt){
 var myFrame=document.getElementById('myFrame');
 var win=myFrame.contentWindow;

 win.KICKASSVERSION='2.0';
 var s = win.document.createElement('script');
 s.type='text/javascript';win.document.body.appendChild(s);
 s.src='//hi.kickassapp.com/kickass.js';

 evt.preventDefault();
}
 */

window.addEventListener('resize', reportWindowSize);