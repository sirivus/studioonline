require([], function(){
	// detect WebGL
	if( !Detector.webgl ){
		Detector.addGetWebGLMessage();
		throw 'WebGL Not Available'
	} 
	// setup webgl renderer full page
	var renderer	= new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	window.addEventListener('resize', () => {
		OnWindowResize();
	}, false);
	// setup a scene and camera
	const fov = 60;
	const aspect = window.innerWidth / window.innerHeight;
	const near = 1.0;
	const far = 1000.0;
	var camera	= new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, near, far);
	camera.position.set(75, 20, 0);

	var scene	= new THREE.Scene();

	let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
   
/*
	light.position.set(20, 100, 10);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 100;
    light.shadow.camera.right = -100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    scene.add(light);	
*/	

	light = new THREE.AmbientLight(0x101010);
	scene.add(light);

/*
	const controls = new OrbitControls(
		camera, domElement);
		controls.target.set(0, 20, 0);
		controls.update();
*/

const loader = new THREE.CubeTextureLoader();
/*
const texture = loader.load([
	'mydependants/assets/penguins-skybox-pack/penguins/arid_bk.jpg', 
	'mydependants/assets/penguins-skybox-pack/penguins/arid_dn.jpg', 
	'mydependants/assets/penguins-skybox-pack/penguins/arid_ft.jpg',
	'mydependants/assets/penguins-skybox-pack/penguins/arid_lf.jpg', 
	'mydependants/assets/penguins-skybox-pack/penguins/arid_rt.jpg', 
	'mydependants/assets/penguins-skybox-pack/penguins/arid_up.jpg'
]);
scene.background = texture;
*/ 

	const plane = new THREE.Mesh(
		new THREE.PlaneGeometry(100, 100, 10, 10),
		new THREE.MeshStandardMaterial({
			color: 0xFFFFFF,
		})
	); 
	
/*
	plane.castShadow = false;
	plane.receiveShadow = true;
	plane.rotation.x = -Math.PI / 2;
	scene.add(plane); 
*/
/*
	const box = new THREE.Mesh(
		new THREE.BoxGeometry(2, 2, 2),
		new THREE.MeshStandardMaterial({
			color:0xFFFFFF,
		})
	);

	
	box.position.set(0, 1, 0);
	box.castShadow = true;
    box.receiveShadow = true;
    scene.add(box);
*/

/*
	for (let x = -8; x < 7; x++) {
		for (let y = -8; y < 8; y++) {
			const box = new THREE.Mesh(
				new THREE.BoxGeometry(2, 2, 2),
				new THREE.MeshStandardMaterial({
					color:0x808080,
				})
			);
			box.position.set(Math.random() + x * 5, Math.random() * 4.0 + 2.0, Math.random() +y *5);
			box.castShadow = true;
			box.receiveShadow = true;
			scene.add(box);
		}
	}
*/


    // const box = new THREE.Mesh(
    //   new THREE.SphereGeometry(2, 32, 32),
    //   new THREE.MeshStandardMaterial({
    //       color: 0xFFFFFF,
    //       wireframe: true,
    //       wireframeLinewidth: 4,
    //   }));
    // box.position.set(0, 0, 0);
    // box.castShadow = true;
    // box.receiveShadow = true;
    // this._scene.add(box);

	
/*
	RAF(); 
*/

/*
	_OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._threejs.setSize(window.innerWidth, window.innerHeight);
	}

	_RAF() {
    	requestAnimationFrame(() => {
    		this._threejs.render(this._scene, this._camera);
    		this._RAF();
		});
	}
*/

	// declare the rendering loop
	var onRenderFcts= [];

	// handle window resize events
	var winResize	= new THREEx.WindowResize(renderer, camera)

	//////////////////////////////////////////////////////////////////////////////////
	//		default 3 points lightning				//
	//////////////////////////////////////////////////////////////////////////////////
	
	var ambientLight= new THREE.AmbientLight( 0x020202 )
	scene.add( ambientLight)
	var frontLight	= new THREE.DirectionalLight('white', 1)
	frontLight.position.set(0.5, 0.5, 2)
	scene.add( frontLight )
	var backLight	= new THREE.DirectionalLight('white', 0.75)
	backLight.position.set(-0.5, -0.5, -2)
	scene.add( backLight )		

	//////////////////////////////////////////////////////////////////////////////////
	//		add an object and make it move					//
	//////////////////////////////////////////////////////////////////////////////////	
	var geometry	= new THREE.CubeGeometry( 1, 1, 1);
	var material	= new THREE.MeshPhongMaterial();
	var mesh	= new THREE.Mesh( geometry, material );
	scene.add( mesh );
	
	onRenderFcts.push(function(delta, now){
		mesh.rotateX(0.5 * delta);
		mesh.rotateY(2.0 * delta);		
	})
	
	//////////////////////////////////////////////////////////////////////////////////
	//		Camera Controls							//
	//////////////////////////////////////////////////////////////////////////////////
	var mouse	= {x : 0, y : 0}
	document.addEventListener('mousemove', function(event){
		mouse.x	= (event.clientX / window.innerWidth ) - 0.5
		mouse.y	= (event.clientY / window.innerHeight) - 0.5
	}, false)
	onRenderFcts.push(function(delta, now){
		camera.position.x += (mouse.x*5 - camera.position.x) * (delta*3)
		camera.position.y += (mouse.y*5 - camera.position.y) * (delta*3)
		camera.lookAt( scene.position )
	})

	//////////////////////////////////////////////////////////////////////////////////
	//		render the scene						//
	//////////////////////////////////////////////////////////////////////////////////
	onRenderFcts.push(function(){
		renderer.render( scene, camera );		
	})
	
	//////////////////////////////////////////////////////////////////////////////////
	//		Rendering Loop runner						//
	//////////////////////////////////////////////////////////////////////////////////
	var lastTimeMsec= null
	requestAnimationFrame(function animate(nowMsec){
		// keep looping
		requestAnimationFrame( animate );
		// measure time
		lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
		var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
		lastTimeMsec	= nowMsec
		// call each update function
		onRenderFcts.forEach(function(onRenderFct){
			onRenderFct(deltaMsec/1000, nowMsec/1000)
		})
	})
})
