(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 680,
	fps: 45,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.zeroTrans = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,700,908);


(lib.SpongeCoin = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,462,462);


(lib.monopCoin = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,462,462);


(lib.GanonCoin = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,462,462);


(lib.Face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var ticks = 0;
		var me = this;
		var frame = 0;
		createjs.Ticker.addEventListener("tick", handleTick);
		function handleTick(event) {
		     ticks++;
			 if(ticks%45===0){
				 frame++;
				 me.gotoAndStop(frame);
			 }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AilHAIgHgJIgCgPQAcgXCtgiQBxgWDbgiQAzgHA7g+QBBhFAFgCIARAHQAIAFAAAQQAABxk7BPQhvAciAASQhoAOgyAAQgQAAgFgDgAnqhwQgDgMAAgZQAAgbATgVQAQgUAZgHQAYgHAQAJQATAKAAAcQAAAjgNASQgRAYgtAAQgZAAgQgFgAGSjCQgIgRAAgNQAAgXACgPQBFgPAYASQAPALAAAfQAAAZgKALQgNAOglAAQgdAAgNgbgAk4lnQgpgNgMAAQgJAAguAJQg4ALg+AFIhkAAIgSgGQgHgFAAgQQAAgQAJgEIAQgDQC2glBwALQBaAJAeAlQgKASgEAFQgGAHgPAAQgNAAgogMgAEImEQAAgUAXgJQAxgSCjgHQBjgSAmAWQANAHAHANIAIAQIgFAPQgGAFgsgEIg9gGQieAAg9AQQgSAFgLAHIgLAHQgZgXAAgIg");
	this.shape.setTransform(55.9,47.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj7E+Qg0g9ghhGQgcg6AAgaQAAgPADgFQAEgEANgCQBGgNAtgOIElgGQCBgDB9gZQB+gWAIAAQAqgBALAmQAJAgAACAIAABNQgFA6geApQhXB7kqAAQjIAAiRisgAkwCFQAAARAiAvQAmA1A1AyQCSCHCDAAQEDgBBOhrQAZgjAEguIAAgzQAAgTgGguQgHgvgHgfIhxARQiEAVh4AKIkoAEQgMAFhEAFQgDAFgDgCQgBABAAAPgApohrQgHgGAAgRQAAgkBfgaQCBgdBGgRIhlgdQgWgGgagLQgFAFgPAAIgsgTQgxgYgTgTIgDgPQAmgfAyAXQAQAHALAKQBQgSDCCGQAAAainAvQjHA4gIADQgOgEgEgEgAG+icQiXgzhFgYIgCgPQAbgiB7g+QB7g9A+gLQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAQADABAAAPQAAAdhvA3Qh2A1gQAKQBEAWB5AgQBcAcAYAgIgFAPQgDAFgCADQgEACgQAAQgDAAiRgvgAj6mYQgYgdAAgQQAegMAeATQAZAPAPAbIgFAPQgDAFgCADQgEACgQAAQgUABgagegABMmYQgCgHAAgQQAAgQAGgMQAIgOAVgQQAMAFAFAFQAIAJAAARQAAAPgKATQgKARgPANQgSgGgFgNg");
	this.shape_1.setTransform(54.9,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiLHGQhMgegNgUQgGgJAAgzQAAgiALgaQAKgXAkg3QgdgdgJgPQgJgOAAgQQAAhCAoglQAjgdA3gCQAygDAnAUQAnAYAAAjQAAAZgDgDIgDAEQgEAEgPAAQgLAAgZgdQgZgdgFAAQhGAAgeAjQgRAUAAAZQAAASAlAMQAxAQAYAWQgdAdgdAXIglAcQgZAUAAAvQAAAbADAIQAKAVAiACIBJAAQAIgIAVgkQAMgUAXgBQALAFAFAFQAIAIAAARQAAAVgVAXQgIALgiAegAneiQQgpgOgKgUQgEgHAAgXQAAgsAbgXQAXgVAjACQAhABAYAUQAbAWAAAiQAAAfgCAHQgGAcgbAHgAncjgQgHANAAAHIAEAAIAOAFIAwAAIADgPQgRgZgnAAQAAADgGAMgAGKkDQAAghAdgWQAbgVAngFQAmgFAbAMQAeANAAAcQAAAlgWAXQgaAcgvAAQhfAAAAg3gAHGkhIAAAWIAIAEQAKAEAQAAQAQAAAHgFIAIgKIAHgIQg4gIgNAAIgDABgAqck6IgSgGQgHgFAAgRQAAgQAJgDIAQgDIEcgFIBPgLQAggDA2AEQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQADACAAAOQAAAJgDABIgUACQg5ADhfAggAEemEIgKgJIgCgPIATgRQALgGAZgJIEJgFQAOgDAfAAQAkgBAOAEQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQADACAAAOQAAARgRACQgqAIgaAKIkWAFQADAFgZAAQgRAAgGgEg");
	this.shape_2.setTransform(54.9,54.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCG5QgbgigPAAQgQAAgJAJIgQAUQgbAchXAAQhyAAgxgvQgbgbAAgaQAAgbAHgSQAKgZAXAAQAZAAAAAFQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAQADABAAAPQAAAMgKAKQgKAKAAANQAAAGAjATQAbAPAPAGIBxAAIA7g3QAqgnAYgLQATAMAOA2QAdAxBfAAQBiAAAmgyQAUgaAAgiQAAgKgQgJQgegQggggIgCgPQBJgeAhAfQAYAXAAAzQAABDgbAmQgwBDiCAAQhfAAgpghgAnJhqQgCgFAAgZQAAgWATgUQARgSAYgHQAZgHAQALQATANAAAgQAABGg8AAQgvAAgLgWgAGXipQgIghAAADQAAgNATgOQASgNAXgFQA8gLAAA9QAAAdgFAJQgNAWgvAAQghAAgOgjgAqRjYIgBgDIgIgEQgCgDAAgPQAAgWA7gsQA8gtBHgeQBSgjA2AEQBAAFAJA+QgEAKgDAEQgHAIgQAAQgVAAgNgRQgOgSgcAAQhPAAhaBJQgXASgjAgQgaAWgKAAQgPAAgEgCgAJJmCQhAgrghAAQhNAAgzAfQgnAggHACQgPgFgDgDQgHgGAAgRQAAgwA5gUQAygRBMAKQBJAJA5AdQA8AfAHAlQgDAJgCAEQgFAHgPAAQgbgVgggVg");
	this.shape_3.setTransform(58.4,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AF5FgQgXgdAAgmIgBgKIrKAAQAAAMgDAKQgMAvhJAAQgdAAgMgMIgDgPQASgQAwgkIAFgFQgCgFAAgIQAAgQAJgEIABAAQAAgRgUgpQgUgpAAgFQAAgeAOgBQAMAAATAWQArA0ACA6IEOgEQAPgDAAgCIGzAAIAEgXQAWhaBNAHQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAQADABAAAPQAAACgeBAQgeBDAAAQQAAAgAfAOIB3A0QgKARgEAFQgGAHgPAAQhlABgpg1gAEMjEIgMgCQgCgPAAgeQAAhKA8ASQAWAGATAQQATAQAAAMQAAAXgRAPQgVARglAAQgQAAgPgCgAlqjGQgCgPAAgbQAAgVARgNQAQgNAWAAQAWgBAQALQARANAAAXQAAAggFAFQgJAKgpAAQgeAAgXgEgApqlNIgSgHQgHgEAAgRQAAgQAJgDIAQgEIHGgEIAPgEQAHABANADIACAEQADAEAAAOQAAARgHAHQgEAEgOAFgAENlhQgLgEgHgKQgHgKAAgLQAEgFALgFQAKgEAAgCIFeAAQAGADALACQAIADAAAQQAAAQgJAFQgCACgOAEg");
	this.shape_4.setTransform(56.9,55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhmGrQgHgFAAgQQAAgVBLgfIBigpIFtgFQAhgFAWAFQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAABQADABAAAPQAAAQgPAJIgeALIlwAFQgoAPh4AyIgSgGgAmegBQgFgGAAgNQAAgGATgQQAUgSAVgJQA8gZAABJQAAAWgUAIQgLAEgdAAQgqAAgNgOgAFxhOIAAgbQAAgjAogNQAogOAAAzQAAAYgKARQgLAUgTAAQghAAgHgXgAlih9QgTgEhvgGQhtgGgWgGIgDgPQAqgqB6AIQAbACBVAKQBKAIAsABQAGADALACQAIADAAAQQAAAQgJAFQgCACgOADgAIcj6QghhSgmgmIhdAAQgqAogYA5QgWBCgTAlIgPAFIgUgUQgFgGAAgJQAAhoA9hBQA3g7BPgEQBPgDA3A4QA9A+AABxQAAAbgDAPQgCAAgHADIgNAEQgWgRgghOg");
	this.shape_5.setTransform(56.4,35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjHHiIhdgmQhBgagegQIgCAAIgSgGQgDgCgCgEQgpgHgTghQgHgOgEgRIgBgOQAAgHADgIQAHgQAPgMQAUAGARAVQAWAbA2AjQBTgEBogHIB9gIQBSAABWASQBWARA2AAQAjAAAmgbQASgNAnglQAbgaAKABQANACAAAwQAAApglAdQgvAlhbAAIgnAAQgKAPgeAHQhWAWgjAQgAi7GrID7AAQAEgFAQgGIhGgEQhrgHiUgCIA2AYgAoUiUQgLgMAAgaQAAgLAqgSQArgTAygIQCGgWAABOQAAAcgUARQgdAZhCAAQhvAAgggggAmmi4IgDAEQgEACAAACIAMAFIA/AAQARgHAIgIQgPgFhGgDgAFdh+QgNgFgFgFQgHgIAAgRQAAgTAfgaQAfgaAmgMQAqgOAbAMQAfAPAAAzQAAAVgtAhgAGWi4IgHAGIBBgDQgEgGgXgCIgIAAQgRAAgGAFgAE/laQgQgKgGgLQgDgFAAgFQAAgaAIgDQAGgDAXAIQBTAeBPAAQAMAAArgNQArgMANAAQAZAAAAAFQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQADACAAAOQAAATgjASQgpAUhAAAQh+AAgxgegApglGIgSgGQgHgFAAgRQAAgQAJgDQAFgDALAAQDxgNAfgUQAHgEADgGQAGgDApABIACAEQADAEAAAOQAAAagaALQg5AQg+AUgACGm2QAAgjAtAMIACAFQADADAAAPQAAAZgDgDIgIAEQgJAFgFABQgZgaAAgGgAi9mjIgFgCIgIgFQgCgCAAgQQAAgJAbgNQAbgOAVgBIACAIQADAIAAAOQAAAPgFAHQgJANgaAAQgQAAgJgDg");
	this.shape_6.setTransform(64.9,54.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOEJQgUgHgUgQQgLgJgYgXIAAhTQABAAADgGQAFgGAQAAQATgBALAjQAOAsAVATIBEgCQAjgXADguQACgsAZgMQANANAGARQAGANAAAKQAAAogSAlQgXAwgsACgApCB4QgKgLAAgbQAAhAAmgcQAggZAyAFQAuAFAjAZQAmAdAAAlQAAAagZAXQgjAdhGAAQhMAAgXgYgAoOAsQgFARgEAJQACAGAOAGQAQAIASgBQAKAAAagIQAggLAPgNQgKgLgcgKQgjgMgrgCIgIAWgAGABpQgogFgLgWQgEgHAAgXQAAg+AngjQAhgdA1gBQAwAAAmAYQAnAYAAAiQAAAigIAPQgMAWgtAfgAGagIQgJAIgGAUQgHAVgEAGIAQACQAcACA9gBQAWgXAIgMQAIgNACgNQgsgNgdAAQggAAgOAQgApniIQgDgDAAgMQAAgQAJgEIAQgCQA7gFCqgXQAAgDB4AAQAGADALACQAIADAAAQQAAAQgJAFQgCACgOADQiEgFhCARQhJASgwAAQgpAAgLgMgADiiLQgHgGAAgQQAAgmBWgbQBjggC0gFIARAMQAQANACAKIgFAUQhFAQidAcQiAAWgQAIIgSgFg");
	this.shape_7.setTransform(60.4,38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhKKKQgXglhBkDQhDkHAAg9IABgeQABgKAFgKQAJgDCFgDQCFgCAQgFQBtgfAGAAQApgFgGAsQAAAqAFBVIAFBcQAABqgOBhQgcDGhJA3gAh0EsQAeDLAdBfICcgDQBJh9AHiuQACg1gKiOQh7ADhMAGQg9AGgPAEIguAAQATBMAPBogAikBGQAigDAmgEIBOgIQAAgCAXgBQAngBB4AAIgEgzQgXAEgSALQgSAMgPADQg2AMjXgQQAIAUAHAYgAp7jpQgDgWAAg8QgCgeABgPQABgaANgSQAlgwCbgPQAPANATAvQAUAxAAAXQAAANgCACQgBACgMABQgqAFhFAlQgYANgiAUQgZAPgUAAQgZgBgCgFgAo7lzQgRAdAAAQIABATIAEACQARgJAVgJQAogOBLgFQgGgJgKgdQgLgcgBgHIhDAAQgZAHgVAlgAJIlSIiCAAQgZgHgHgaQgDgMAAgjQgCgNABgLQABgXAMgQQAmgzCHAOQAjAbAIAYQACAHAAAmQAAAmgEALQgMAkguAAIgDgBgAIKnGQgkAGgRAKIAAAtIBuAAQANgFADgFQAEgFAAgTIgBgUIgCgNQgnAAgjAGgAqtocIgDgPQAogMAagPQAXgPANgHQAsgXCUgLQAGADALACQAIAEAAAQQAAAPgJAGIgQAFQiOAPgtAYIgYAPQgNAGgZgBQgeAAgMgMgAGFo6IAAgDIgIgEQgCgDAAgPQAAgSA7gSQBRgZCHAJQAMAJAMATQAKAPABAGQgiANgMgEQgFgGgCAAQiuAAgbAOQADAOgdAAQgQgBgEgCg");
	this.shape_8.setTransform(53.4,59.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACeIGIgJgaIgZAQQgcARgRAHIgSgGQgHgFAAgQQAAghAWgOQATgNAfAFQBHAMAbA6QgEAKgDAEQgHAIgQAAQgYAAgMgYgAEZGWQgGgFgMgRQgMAUgMAIIiCAAQgxgdgGgGQgUAUgMAIQgYARgbAAQgiAAgWgYQgPgYgEgCIAAg8IAFgFQAFgFAPAAQAUAAAEAZQACANgBAUQAEAAAIAEQAIADAOAAQAeAAAQgbQAQgcARAAQAeAAAMASIAPAeIBigDQAGgJADgSIADghQArgQALAUQADAEAAALQASAJAbAZQAVAUARAUQAagDAIgTQAEgJABgaQABgWAIgGQALgJAiALQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAABQADABAAAPQAAB0hVAAQg8AAgmgkgAqqARQgKgOADgQIAGgRQAAgXAKgqQAQhAAfgvQBeiSDLA4QAWATAHAYQAEANACAOQAuAKAHAuQADAXgGAYQAAAMAEAmQABAlgPAZQgsBJi/AAQihAAgggtgApFisQgaAlgPAyQgLAjAAATQAAATACAEQAFAMAVADIDuAAQAEgEAtgWQAbgPgDgYIAAhiIgDgFQgGApgMARQgXAlg9AKIiBAAQgTgLgEgUQgCgHAAgbIgCgYQgBgRAGgLQAPghBMAAQAaAAAQAPQANAMAAALQAAAZgDgDQgEADgSgCQgagDgJAAQgZAAgOACIAAAjIBjAAQA6gNACgVQgHgdAHgWIAAgtQgsgMglAAQhiAAg6BRgAEIhbQgog2AAg+QAAgRAPggQATglAdggQBQhZBwAIQAIAEAJAJQAIAIAAADIgIAYQhPgVhOBRQgbAcgVAiQgRAcAAAIQAAAlA1A1QA8A6BAABIBdAAQAQgQAIgRQAGgMAAgHQAAglgHgXQgMgqgigSIhGACQgOAQgIASIgFAQQAJADAaACIBGAFIACAFQADADAAAPQAAASgMAMQgOAMgYAAQhNAAgXgjQgKgPAAglQAAgrAMgRQAYghBKAAQBkAAAeBRQAKAbAAA+IACAgQAAAVgHAPQgWAohiAAQilAAhGhdgAqSl4QgMgHghgcIADgeQANgDAvAGQA1AHAIAAQDwAAAxgcQAMgGAFgIQAGgEAcAGIACAJQADAHAAAOQAAAQgBACQgEAIgUAFQgqAMjPAWgAEXnSIgSgGQgHgFAAgQQAAgQAJgEQAFgCALgBIFjgFQAngXAaADIACAFQADADAAAPQAAAVgMAIQgWALgVAMg");
	this.shape_9.setTransform(59.9,47.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACBG2Qg6gdgqhMQgohMg9gfIgCgPQAAgGAJgHQAIgIAIgCQEqgXBSgdQAZgJAbgSQAcgUAcgLQAtAuAACpQAAA5gVAWQgpAqiPAYgAEqDHQh/Agh/AMQALASAlAuQAiAuAKAhQDUgIA7gfQAWgMAEgQIABgZQAAgOgLguQgMg3gCgNQgvAQhAARgAnig3QgCgPAAgqQAAhkAZgDQAZgCAABqQAAA4gDAmQgCAAgHADIgNAEQgSgLgFgigAG0iEQgCgMAAghQAAgqADgPQAHghAZgNQAOAPAGAQQAFALAAAIQAAAKgFAvQgFAuAAAZQgDAAgHAEIgPAIQgSgQgFgagAkDkYQgFgNAAgYQgZABiyAcIiwAcQgjAAgMgMIgDgPQBngTCrgkQBvgXAjgDQAtgEANAQQALAOAAAwQAAAZgDACIgDAEQgEADgPAAQgWAAgIgUgADblcQgPgpAAgKQAAgQAHgHQADgDAPgFICMgFQAAgCBWAAQBmABBwAGQAGADALACQAIADAAAQQAAAQgJAFQgCACgOADIjdgBQh6AAg+AGIAHAKQADAIAAAQIgBAVIgCANIgDAEQgEADgPAAQgNAAgRgwg");
	this.shape_10.setTransform(63.9,45.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ai9KsQgLgEgHgKQgHgKAAgLQALgDgCgDQgBgBAAgBQgBgBAAgBQAAAAAAAAQAAgBABAAQAKgECTAAQAGACALACQAIAEAAAPQAAAQgJAGQgCABgOAEgAE/FPQgFgNAAgFQAhixA1iKQBqkSBiC8QgPAUghgBQgvgEgjAAQghBPgdB6IgzDgQgCAAgHADIgNAFQgMgNgIgQgAohFfIgHgCIgEiqQgFhggMhNIiRgCQgLgEgHgIQgHgKAAgLQAOgDgEgDQgEgEABgBQAKgECnAAQAsA7AHB3QAKCVAOArQAGAIgLAKQgLAKgTAAQgQAAgKgDgAlYCLQAAgQAHgEQAEgDAOgCIGxgFQBFgVAQAPQAFAFAAAkQAAA2gZAkQgwBGiDAAQisAAisilgACBCkIluAFQAaAIAlAmQA0AiB6AAQB9AAAUgjQAHgLgEgSIgEgVIgGgCIgJACgAiRgvIgRgCQgCgFAAgZQAAg5AThjQAciSADgVQAci8ANApQAJAcAAB6QAAAgghEMQAAAPAUAEQAWAFABABQgHAJgDAMQgIAJglAAQgQAAgUgDgAJclxQghgEgPgEQgOgEgGgGIgCgPQgIgDANgLQAOgNAfAAQgUg8AAgeIAAgPQADgBACgEQAcAAARAdQAIAQAMAbIBVADQAGACALACQAIAEAAAPQAAAYgLAHIgYAHQgjAOAABmIgIAHQgHAGgPAAQgoAAAAhfgAnXlnQgNguAAgdQAAgMAOgbQAPgdAQgMQAQAGAJAOIAAC7QgDAAgHAFIgPAIQgRgQgPgxgAFkleQgCgPAAgiQAAgjACgOQAFgjASgLQAQAGAJAOIAACdQgDAAgHAFIgPAIQgSgLgFgjgAqVpRQhAgJgFgFIgDgPQBCgzCZALICKALQBUAHA/gFIACAEQADAEAAAOQAAARgHAHQgEAEgOAFIlKAKQgWAAg8gJgAHKpaQiMgJiBgDQgLgEgHgKQgHgKAAgLQBcg9CeAzQB/AAAxAKQAnAIAPAUIgIAYQgbADgZAAIh+gIg");
	this.shape_11.setTransform(66.9,70.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ak1I9QgJgaADggIAGgdQgCgeABgYQABgtALgfQAPguAkgUQgkABgpAEQgLgEgHgKQgHgKAAgLQBvgrCjAxICIAqQBSAWBGAAQBwAAAUgUQAGgGAGgMQAIgLATgGIARAGQAIAFAAAQQAAAggvAYQg2AbhZAAQhmAAhDgSQgigJg7gdQgzgYgtgIIAAABQAAAEg8A7Qg8BEAAAzQAAA3AFAOQAOAnA6AMIBnAAQAkg4Arg2QBXhpA+AAQAZAAAAAFQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQADACAAAOQAAAWhFAkQhJAngIAgQgFATADAfQACAbgFAKQgQAfiJAAQiWAAgehSgAIqijQhOgJgUgcQgHgKAAggQAAhbCHAAQBXAAASAmQAJATgJAVQAAAqgCAIQgIAYgjASgAIqkVQglALgSASIAAAUQABABAYADQAZADAHADIBQAAIADgIIAAg0QgTgGgTAAQgXAAgYAHgApRjLQgygWgKgRQgFgHAAgfQAAg1AkgfQAfgcAwgFQAsgEAiARQAkASAAAhQAAATgTArQgbA5gmALgAo+lNQgEAGgFARQgHAPgSAHIAQAVQAJALAIAAQAsAAAngHQADgyAFgUQgngLgXAAQgWAAgGALgAK2msIgSghQgjgvhiAAQhnAAgfAYIgWAWQgNAMgUAHIgSgGQgHgFAAgRQAAgUAsgaQAvgcA9gMQCmggBcBvIAAA0IgFAHQgFAGgPAAQgMAAgIgPgArbn1QgHgHAAgRQAAgwAwglQA+gvBzAEQAWALAwAsQA1AoBGAAQAPAAAggLIAngOQASAEACACQAFAEAAARQAAAZgWANQgcAPhBAAQhUAAg8gpQgOgJgwgwQh7AFgTAmQgGAKgGAXQgHAUgWAMQgOgFgEgDg");
	this.shape_12.setTransform(60.4,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,2.2,132.9,90.4);


(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#293D50").s().p("A5gZhQqlqlAAu8QAAu8KlqkQKkqlO8AAQO8AAKlKlQKlKkAAO8QAAO8qlKlQqlKlu8AAQu8AAqkqlgA3X3hQpwJwAANxQAANyJwJwQJwJwNwAAQNzAAJwpwQJwpwAAtyQAAtxpwpwQpwpwtzAAQtwAApwJwg");
	this.shape.setTransform(231.1,231.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,462.1,462.1);


(lib.AnimateCoin = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,462,462);


(lib.ZeroCoin = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.border();
	this.instance.setTransform(231.1,231.1,1,1,0,0,0,231.1,231.1);

	this.instance_1 = new lib.zeroTrans();
	this.instance_1.setTransform(52,64,0.752,0.752);

	this.instance_2 = new lib.zeroTrans();
	this.instance_2.setTransform(48,64,0.752,0.752);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F8CE").s().p("EgFFAiHQhtgShtgWQgtgGgegIQhpgXhqgaQiUglhzgkQjvjch3hOQi4jDiQhoQAEgrATgXIgXgiQgZgog4hAIhkhyQh9iSgPhWQg0kcgYiWQgrkLgBivQABhSAbhVQAJgcAXg2IABgSQAAhdBAicIAkhRQABgbgBgcQAAjRA7iPQAzh7BQgwQAxgeAqAIQAJhOBahUQAEgqA0hIQA3hMBXhSQDQjBCjghQCOgdBBg7QALgKAmgoQAdghAcgTQBWg9DAgjQD2guHXgTQG1A2ESBeQDlBQCPB4QBYBJBvCWQBzCbBPBFQB/BmBYCDQBaCHAABhIAAAFQAQgCASAGQA4AVAiBYQAoBngECfIArEiQAkD8AABWQAABngTBOQgLArgPAeQAaAiAABQQABASgiCHQgpChguCRQh9GKhgAkIAAADQAAAvhHBBIgaAXQg0B+gGAPIgBAGQhPAGheAdQixA3iGBiQiNBoAABXQAAAOADAOQi2BGkmAhQgPAHgTAHQhIAYiMAOIgDALQgFAWgVANQgwAeitAAQinAAkLgpg");
	this.shape.setTransform(228,231.5);

	this.addChild(this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,462.1,462.1);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.face = new lib.Face();
	this.face.setTransform(224.5,245.8,1,1,0,0,0,58.4,38.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-1.3,-236.5)).s().p("EgALAg4MAAAgnBIAGAYQgCAHAAAJIAFAWQACAGACAFIAEATQADAGADAFMAAAAlagEgALgg3IAXAAIAAXxQgMACgKAJIgBABg");
	this.shape.setTransform(464.3,227.5);

	// Layer 2
	this.instance = new lib.Bitmap3();

	this.addChild(this.instance,this.shape,this.face);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,465.6,463);


(lib.FloridaCoin = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.border();
	this.instance.setTransform(231.1,231.1,1,1,0,0,0,231.1,231.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6FFF9").s().p("AkDADQhtgQhtgWQgdgEgWgFIQhAAQguAIg7AGIgCALQgGAUgUANQgwAeitAAQipAAkJgpg");
	this.shape.setTransform(221.4,449.5);

	// Layer 2
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(19.1,11);

	this.addChild(this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,462.1,462.1);


(lib.Coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}
	this.frame_120 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_200 = function() {
		this.stop();
	}
	this.frame_240 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(40).call(this.frame_79).wait(41).call(this.frame_120).wait(39).call(this.frame_159).wait(41).call(this.frame_200).wait(40).call(this.frame_240).wait(41));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(232.8,231.5,1,1,0,0,0,232.8,231.5);

	this.instance_1 = new lib.ZeroCoin();
	this.instance_1.setTransform(232.8,231.5,0.026,1,0,0,0,232.8,231.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.FloridaCoin();
	this.instance_2.setTransform(232.7,231.5,0.035,1,0,0,0,232.2,231.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.GanonCoin();
	this.instance_3.setTransform(232.7,231.5,0.035,1,0,0,0,232.2,231.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.AnimateCoin();
	this.instance_4.setTransform(232.7,231.5,0.035,1,0,0,0,232.2,231.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.monopCoin();
	this.instance_5.setTransform(232,231.5,0.035,1,0,0,0,232.8,231.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.SpongeCoin();
	this.instance_6.setTransform(232,231.5,0.035,1,0,0,180,233.5,231.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.87},0).wait(1).to({scaleX:0.83},0).wait(1).to({scaleX:0.78},0).wait(1).to({scaleX:0.72},0).wait(1).to({scaleX:0.63},0).wait(1).to({scaleX:0.49},0).wait(1).to({scaleX:0.29},0).wait(1).to({scaleX:0.03},0).to({_off:true},1).wait(240).to({_off:false,regX:233.5,scaleX:0.04,x:232},0).wait(1).to({regX:232.8,scaleX:0.19,x:231.8},0).wait(1).to({scaleX:0.35,x:231.7},0).wait(1).to({scaleX:0.49,x:231.6},0).wait(1).to({scaleX:0.61,x:231.5},0).wait(1).to({scaleX:0.69},0).wait(1).to({scaleX:0.75},0).wait(1).to({scaleX:0.8,x:231.4},0).wait(1).to({scaleX:0.84},0).wait(1).to({scaleX:0.86},0).wait(1).to({scaleX:0.89},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.93,x:231.3},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.99},0).wait(1).to({regX:233.5,scaleX:0.99,x:232},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(1).to({regX:231.1,regY:231.1,scaleX:0.19,x:232.4,y:231.1},0).wait(1).to({scaleX:0.33,x:232.2},0).wait(1).to({scaleX:0.45,x:232},0).wait(1).to({scaleX:0.56,x:231.8},0).wait(1).to({scaleX:0.65,x:231.6},0).wait(1).to({scaleX:0.73,x:231.5},0).wait(1).to({scaleX:0.79,x:231.4},0).wait(1).to({scaleX:0.84},0).wait(1).to({scaleX:0.87,x:231.3},0).wait(1).to({scaleX:0.9,x:231.2},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.96,x:231.1},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.99,x:231},0).wait(1).to({scaleX:1},0).wait(1).to({regX:232.8,regY:231.5,scaleX:1,x:232.7,y:231.5},0).wait(2).to({regX:231.1,regY:231.1,scaleX:1,x:231,y:231.1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.96,x:231.1},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.9,x:231.2},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.84,x:231.3},0).wait(1).to({scaleX:0.8},0).wait(1).to({scaleX:0.74,x:231.4},0).wait(1).to({scaleX:0.67,x:231.6},0).wait(1).to({scaleX:0.55,x:231.7},0).wait(1).to({scaleX:0.37,x:232.1},0).wait(1).to({regX:232.2,regY:231.5,scaleX:0.04,x:232.7,y:231.5},0).to({_off:true},1).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).wait(1).to({regX:231.1,regY:231.1,scaleX:0.21,x:232.5,y:231.1},0).wait(1).to({scaleX:0.35,x:232.3},0).wait(1).to({scaleX:0.48,x:232.2},0).wait(1).to({scaleX:0.59,x:232.1},0).wait(1).to({scaleX:0.68,x:231.9},0).wait(1).to({scaleX:0.75},0).wait(1).to({scaleX:0.8,x:231.8},0).wait(1).to({scaleX:0.85,x:231.7},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.96,x:231.6},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:1},0).wait(1).to({regX:232.2,regY:231.5,scaleX:1,x:232.7,y:231.5},0).wait(2).to({regX:231.1,regY:231.1,x:231.6,y:231.1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.94,x:231.7},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.87},0).wait(1).to({scaleX:0.83,x:231.8},0).wait(1).to({scaleX:0.79},0).wait(1).to({scaleX:0.73,x:231.9},0).wait(1).to({scaleX:0.65,x:232},0).wait(1).to({scaleX:0.55,x:232.1},0).wait(1).to({scaleX:0.42,x:232.3},0).wait(1).to({scaleX:0.25,x:232.4},0).wait(1).to({regX:232.2,regY:231.5,scaleX:0.04,x:232.7,y:231.5},0).to({_off:true},1).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(101).to({_off:false},0).wait(1).to({regX:231,regY:231,scaleX:0.17,x:232.5,y:231},0).wait(1).to({scaleX:0.33,x:232.3},0).wait(1).to({scaleX:0.48,x:232.1},0).wait(1).to({scaleX:0.61,x:232},0).wait(1).to({scaleX:0.7,x:231.8},0).wait(1).to({scaleX:0.77},0).wait(1).to({scaleX:0.82,x:231.7},0).wait(1).to({scaleX:0.86,x:231.6},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.97,x:231.5},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({regX:232.2,regY:231.5,scaleX:1,x:232.7,y:231.5},0).wait(2).to({regX:231,regY:231,x:231.5,y:231},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.96,x:231.6},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.86,x:231.7},0).wait(1).to({scaleX:0.82},0).wait(1).to({scaleX:0.75,x:231.8},0).wait(1).to({scaleX:0.66,x:231.9},0).wait(1).to({scaleX:0.53,x:232.1},0).wait(1).to({scaleX:0.34,x:232.3},0).wait(1).to({regX:232.2,regY:231.5,scaleX:0.04,x:232.7,y:231.5},0).to({_off:true},1).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(141).to({_off:false},0).wait(1).to({regX:231,regY:231,scaleX:0.28,x:232.2,y:231},0).wait(1).to({scaleX:0.45,x:231.9},0).wait(1).to({scaleX:0.56,x:231.6},0).wait(1).to({scaleX:0.65,x:231.4},0).wait(1).to({scaleX:0.71,x:231.3},0).wait(1).to({scaleX:0.77,x:231.2},0).wait(1).to({scaleX:0.81,x:231.1},0).wait(1).to({scaleX:0.84},0).wait(1).to({scaleX:0.87,x:231},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.92,x:230.9},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.96,x:230.8},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.99},0).wait(1).to({regX:232.3,regY:231.5,scaleX:1,x:232,y:231.5},0).wait(2).to({regX:231,regY:231,scaleX:1,x:230.7,y:231},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.94,x:230.8},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.87,x:230.9},0).wait(1).to({scaleX:0.83},0).wait(1).to({scaleX:0.78,x:231},0).wait(1).to({scaleX:0.71,x:231.1},0).wait(1).to({scaleX:0.62,x:231.2},0).wait(1).to({scaleX:0.49,x:231.3},0).wait(1).to({scaleX:0.31,x:231.6},0).wait(1).to({regX:232.8,regY:231.5,scaleX:0.04,x:232,y:231.5},0).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180).to({_off:false},0).wait(1).to({regX:231,regY:231,scaleX:0.23,x:231.5,y:231},0).wait(1).to({scaleX:0.4,x:231.2},0).wait(1).to({scaleX:0.53,x:230.9},0).wait(1).to({scaleX:0.63,x:230.8},0).wait(1).to({scaleX:0.7,x:230.7},0).wait(1).to({scaleX:0.76,x:230.6},0).wait(1).to({scaleX:0.8,x:230.5},0).wait(1).to({scaleX:0.83,x:230.4},0).wait(1).to({scaleX:0.86,x:230.3},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.92,x:230.2},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.99,x:230.1},0).wait(1).to({scaleX:0.99},0).wait(1).to({regX:232.8,regY:231.5,scaleX:1,x:231.9,y:231.5},0).wait(2).to({regX:231,regY:231,x:230.1,y:231},0).wait(1).to({scaleX:1,x:230.2},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.99,x:230.1},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.97,x:230.2},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.9,x:230.3},0).wait(1).to({scaleX:0.86,x:230.4},0).wait(1).to({scaleX:0.82},0).wait(1).to({scaleX:0.77,x:230.5},0).wait(1).to({scaleX:0.7,x:230.7},0).wait(1).to({scaleX:0.62,x:230.8},0).wait(1).to({scaleX:0.5,x:231},0).wait(1).to({scaleX:0.33,x:231.3},0).wait(1).to({regX:233,regY:231.5,scaleX:0.03,x:232,y:231.5},0).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(221).to({_off:false},0).wait(1).to({regX:231,regY:231,scaleX:0.18,x:232.4,y:231},0).wait(1).to({scaleX:0.34,x:232.8},0).wait(1).to({scaleX:0.48,x:233.1},0).wait(1).to({scaleX:0.59,x:233.4},0).wait(1).to({scaleX:0.68,x:233.6},0).wait(1).to({scaleX:0.74,x:233.7},0).wait(1).to({scaleX:0.79,x:233.9},0).wait(1).to({scaleX:0.83,x:234},0).wait(1).to({scaleX:0.87,x:234.1},0).wait(1).to({scaleX:0.89},0).wait(1).to({scaleX:0.92,x:234.2},0).wait(1).to({scaleX:0.94,x:234.3},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.99,x:234.4},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({regX:233.4,regY:231.5,scaleX:1.01,x:232,y:231.5},0).wait(2).to({regX:231,regY:231,x:234.4,y:231},0).wait(1).to({scaleX:1.01},0).wait(1).to({scaleX:1.01},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.99,x:234.3},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.95,x:234.2},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.9,x:234.1},0).wait(1).to({scaleX:0.86,x:234},0).wait(1).to({scaleX:0.81,x:233.9},0).wait(1).to({scaleX:0.75,x:233.8},0).wait(1).to({scaleX:0.66,x:233.5},0).wait(1).to({scaleX:0.53,x:233.2},0).wait(1).to({scaleX:0.35,x:232.8},0).wait(1).to({regX:233.6,regY:231.5,scaleX:0.03,x:232,y:231.5},0).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465.6,463);


(lib.Click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(682,312.9,1,1,0,0,0,350.1,454.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:350,regY:454,x:681.6,y:313.5},0).wait(1).to({x:681.3,y:314.2},0).wait(1).to({x:681.1,y:314.9},0).wait(1).to({x:680.7,y:315.8},0).wait(1).to({x:680.4,y:316.8},0).wait(1).to({x:679.9,y:317.8},0).wait(1).to({x:679.5,y:319},0).wait(1).to({x:679,y:320.3},0).wait(1).to({x:678.4,y:321.8},0).wait(1).to({x:677.8,y:323.4},0).wait(1).to({x:677.1,y:325.2},0).wait(1).to({x:676.3,y:327.2},0).wait(1).to({x:675.5,y:329.5},0).wait(1).to({x:674.5,y:332},0).wait(1).to({x:673.4,y:334.9},0).wait(1).to({x:672.2,y:338.1},0).wait(1).to({x:670.8,y:341.8},0).wait(1).to({x:669.2,y:346},0).wait(1).to({x:667.3,y:350.8},0).wait(1).to({x:665.2,y:356.4},0).wait(1).to({x:662.7,y:362.9},0).wait(1).to({x:659.9,y:370.2},0).wait(1).to({x:656.9,y:378.2},0).wait(1).to({x:653.7,y:386.6},0).wait(1).to({x:650.5,y:394.8},0).wait(1).to({x:647.7,y:402.3},0).wait(1).to({x:645.1,y:409},0).wait(1).to({x:642.9,y:414.8},0).wait(1).to({x:640.9,y:419.9},0).wait(1).to({x:639.2,y:424.4},0).wait(1).to({x:637.7,y:428.3},0).wait(1).to({x:636.4,y:431.7},0).wait(1).to({x:635.3,y:434.8},0).wait(1).to({x:634.2,y:437.5},0).wait(1).to({x:633.3,y:440},0).wait(1).to({x:632.4,y:442.2},0).wait(1).to({x:631.6,y:444.2},0).wait(1).to({x:630.9,y:446.1},0).wait(1).to({x:630.3,y:447.7},0).wait(1).to({x:629.7,y:449.2},0).wait(1).to({x:629.2,y:450.6},0).wait(1).to({x:628.7,y:451.9},0).wait(1).to({x:628.3,y:453},0).wait(1).to({regX:350.1,regY:454.1,x:628,y:454.1},0).wait(1).to({x:682,y:312.9},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(331.9,-141.2,700,908);


(lib.clicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer 1
	this.instance = new lib.Click();
	this.instance.setTransform(30.3,34.4,0.065,0.065,0,-164.3,15.7,644.1,516.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:654.9,regY:383.4,x:28.7,y:42.9},0).wait(1).to({x:28.8,y:42.7,alpha:0.002},0).wait(1).to({x:28.9,y:42.5,alpha:0.004},0).wait(1).to({x:29.1,y:42.2,alpha:0.008},0).wait(1).to({x:29.4,y:41.8,alpha:0.013},0).wait(1).to({x:29.7,y:41.2,alpha:0.019},0).wait(1).to({x:30.1,y:40.5,alpha:0.027},0).wait(1).to({x:30.5,y:39.7,alpha:0.036},0).wait(1).to({x:31.1,y:38.7,alpha:0.047},0).wait(1).to({x:31.7,y:37.6,alpha:0.061},0).wait(1).to({x:32.5,y:36.2,alpha:0.076},0).wait(1).to({x:33.4,y:34.7,alpha:0.094},0).wait(1).to({x:34.4,y:32.9,alpha:0.114},0).wait(1).to({x:35.6,y:30.8,alpha:0.137},0).wait(1).to({x:36.9,y:28.5,alpha:0.164},0).wait(1).to({x:38.4,y:25.9,alpha:0.194},0).wait(1).to({x:40.1,y:22.9,alpha:0.227},0).wait(1).to({x:42,y:19.6,alpha:0.265},0).wait(1).to({x:44.1,y:15.9,alpha:0.307},0).wait(1).to({x:46.4,y:11.9,alpha:0.353},0).wait(1).to({x:48.8,y:7.5,alpha:0.402},0).wait(1).to({x:51.3,y:3,alpha:0.453},0).wait(1).to({x:54,y:-1.6,alpha:0.506},0).wait(1).to({x:56.6,y:-6.2,alpha:0.558},0).wait(1).to({x:59.1,y:-10.7,alpha:0.609},0).wait(1).to({x:61.5,y:-14.8,alpha:0.657},0).wait(1).to({x:63.7,y:-18.7,alpha:0.701},0).wait(1).to({x:65.7,y:-22.3,alpha:0.741},0).wait(1).to({x:67.6,y:-25.5,alpha:0.777},0).wait(1).to({x:69.2,y:-28.3,alpha:0.81},0).wait(1).to({x:70.6,y:-30.9,alpha:0.839},0).wait(1).to({x:71.9,y:-33.1,alpha:0.864},0).wait(1).to({x:73,y:-35.1,alpha:0.887},0).wait(1).to({x:74,y:-36.8,alpha:0.907},0).wait(1).to({x:74.9,y:-38.4,alpha:0.924},0).wait(1).to({x:75.7,y:-39.7,alpha:0.939},0).wait(1).to({x:76.3,y:-40.9,alpha:0.952},0).wait(1).to({x:76.9,y:-41.8,alpha:0.964},0).wait(1).to({x:77.4,y:-42.7,alpha:0.973},0).wait(1).to({x:77.8,y:-43.4,alpha:0.981},0).wait(1).to({x:78.1,y:-44,alpha:0.988},0).wait(1).to({x:78.3,y:-44.4,alpha:0.993},0).wait(1).to({x:78.6,y:-44.8,alpha:0.997},0).wait(1).to({regX:644.1,regY:516.1,x:80.4,y:-53.6,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,13,60.2,69.6);


// stage content:



(lib.myFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var coin = this.coin;
		coin.addEventListener("click", getClicked);
		
		function getClicked(){
			console.log("coin was clicked");

			if(!updating){
				coin_clicked(coin.currentFrame);
				coin.play();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.coin = new lib.Coin();
	this.coin.setTransform(296.9,348,1,1,0,0,0,232.8,231.5);

	this.timeline.addTween(cjs.Tween.get(this.coin).wait(1));

	// Layer 8
	this.instance = new lib.clicker();
	this.instance.setTransform(308.1,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364.1,456.5,465.6,463);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;