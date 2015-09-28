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



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["myFace_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],1), null, new cjs.Matrix2D(1.007,0,0,1.007,-642.7,-508.7)).s().p("EgWLBG9IAAzZIgoAAIAAgUIl8AAIAAs0IkEAAIAAAUIigAAIAAtcImQAAIAAsgImkAAIAAm5ImlAAIAAyuITZAAIAAGQIGkAAMAAAg51IF8AAIAAgoIAoAAIAAl8IMNAAIAAGkIGkAAIAAZpINGAAIAAGkITYAAIAAGkIM0AAIAAGQIGkAAIAAOsIGRAAMAAAAkjImRAAIAATYImkAAIAATtg");
	this.shape.setTransform(350.1,454.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,700.2,908.3);


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


(lib.backofCoinflipped = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(226.8,214.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],0), null, new cjs.Matrix2D(-1,0,0,1,1.3,-236.5)).s().p("EgALAg4MAAAglaQADgFADgGIAEgTQACgFACgGIAFgWQAAgJgCgHIAGgYMAAAAnBgAALo7QgLgJgLgCIAA3xIAXAAIAAX9IgBgBg");
	this.shape_1.setTransform(1.2,227.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],0), null, new cjs.Matrix2D(-1,0,0,1,231.5,-231.5)).s().p("EAFIAkKQK+heIOoBQKFp1AAt7QAAqumBoVQAHgIAGgLQAPgbAAgoQAAgpg5hmQg5hkhShsQjOkPh0gNQiAgOhAgmQgqgZgdgzQghg5gTgQQgqgkhagKQhCgIjzg3Qj3g5jTgaInVAAQAAACgnAFIkDADQjsA2i8BhQigBUirCNQktD7iUDHQhZB6g2BkQhDB8gTBqQgIApg2C3QgpCKAABbIgEAbQgCAgAGAcQAIAlAXAVQgsDVAADmQAAN7KGJ3QIOICLABfI/BAAIAAj6MAAAgnBIACgQIAOh3QAAgbgQgPIAA39IAAirMBITAAAIAAEFIgZAAMAAABBvIAZAAIAACgg");
	this.shape_2.setTransform(234,231.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3F50").s().p("EgFGAisQrAhfoOoDQqGp2AAt8QAAjlAsjVQgXgWgIglQgGgbACggIAEgbQAAhcApiKQA2i2AIgqQAThpBDh8QA2hlBZh6QCUjGEtj8QCriNCghUQC8hgDsg3IEDgCQAngFAAgDIHVAAQDTAbD3A4QDzA4BCAHQBaALAqAkQATAQAhA5QAdAyAqAZQBAAnCAAOQB0ANDOEOQBSBsA5BkQA5BnAAAoQAAAogPAcQgGAKgHAJQGBIUAAKvQAAN6qFJ2QoOIAq+BfQihAVipAAQinAAifgVg");
	this.shape_3.setTransform(233.8,241);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,465.6,465.2);


(lib.backofCoin = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(238.7,214.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3F50").s().p("EgFJAisQq+hfoOoAQqEp2AAt6QgBqvGBoVQgHgIgGgKQgPgcAAgoQAAgoA6hnQA4hkBShsQDOkOB0gNQCAgPA/gmQArgZAdgyQAhg5ATgQQAqgkBbgLQBBgIDzg3QD4g4DSgbIHVAAQAAADAnAFIECACQDuA2C6BhQChBUCrCNQEtD8CUDGQBZB6A2BlQBDB8ATBpQAIAqA2C2QApCKAABcIADAbQADAggGAbQgIAlgXAVQArDWAADlQAAN8qEJ2QoPIDrBBfQifAVinAAIgBAAQipABifgWg");
	this.shape_1.setTransform(231.7,241);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-1.3,-236.5)).s().p("EgALAg4MAAAgnBIAGAYQgCAHAAAJIAFAWQACAGACAFIAEATQADAGADAFMAAAAlagEgALgg3IAXAAIAAXxQgMACgKAJIgBABg");
	this.shape_2.setTransform(464.3,227.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-231.5,-231.5)).s().p("EAFIAkKQLBhfIPoCQKEp3AAt7QAAjmgrjVQAXgVAIglQAGgcgDggIgDgbQAAhbgpiKQg2i3gIgpQgThqhDh8Qg2hkhZh6QiUjHktj7QiriNihhUQi6hhjug2IkCgDQgngFAAgCInVAAQjSAaj4A5QjzA3hBAIQhbAKgqAkQgTAQghA5QgdAzgrAZQg/AmiAAOQh0ANjOEPQhSBsg4BkQg6BmAAApQAAAoAPAbQAGALAHAIQmBIVABKuQAAN7KEJ1QIOIBK+BeI/DAAIAAigIAaAAMAAAhBvIgaAAIAAkFMBIUAAAIAACrIAAX9QgPAPAAAbIAMB3IADAQMAAAAnBIAAD6g");
	this.shape_3.setTransform(231.5,231.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,465.6,465.2);


(lib.Symbol2flipped = function() {
	this.initialize();

	// Layer 1
	this.face = new lib.Face();
	this.face.setTransform(224.5,245.8,1,1,0,0,180,58.4,38.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-1.3,-236.5)).s().p("EgALAg4MAAAgnBIAGAYQgCAHAAAJIAFAWQACAGACAFIAEATQADAGADAFMAAAAlagEgALgg3IAXAAIAAXxQgMACgKAJIgBABg");
	this.shape.setTransform(-15.4,227.5,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-231.5,-231.5)).s().p("EgkKAkKIAAigIAaAAMAAAhBvIgaAAIAAkFMBIUAAAIAACrIAAX9QgPAPAAAbIAMB3IADAQMAAAAnBIAAD6g");
	this.shape_1.setTransform(217.4,231.5,1,1,0,0,180);

	this.addChild(this.shape_1,this.shape,this.face);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,0,465.6,463);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.face = new lib.Face();
	this.face.setTransform(224.5,245.8,1,1,0,0,0,58.4,38.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-1.3,-236.5)).s().p("EgALAg4MAAAgnBIAGAYQgCAHAAAJIAFAWQACAGACAFIAEATQADAGADAFMAAAAlagEgALgg3IAXAAIAAXxQgMACgKAJIgBABg");
	this.shape.setTransform(464.3,227.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["myFace_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-231.5,-231.5)).s().p("EgkKAkKIAAigIAaAAMAAAhBvIgaAAIAAkFMBIUAAAIAACrIAAX9QgPAPAAAbIAMB3IADAQMAAAAnBIAAD6g");
	this.shape_1.setTransform(231.5,231.5);

	this.addChild(this.shape_1,this.shape,this.face);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,465.6,463);


(lib.FaceIt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(34));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(232.8,231.5,1,1,0,0,0,232.8,231.5);

	this.instance_1 = new lib.backofCoin();
	this.instance_1.setTransform(232.8,231.6,0.895,0.818,0,0,101,232.7,231.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.backofCoinflipped();
	this.instance_2.setTransform(232.8,231.5,0.991,1,0,0,0,232.8,231.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol2flipped();
	this.instance_3.setTransform(232.8,231.6,0.895,0.818,0,0,101,232.7,231.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleY:1,skewY:0.2,y:231.6},0).wait(1).to({scaleX:1,skewY:0.4,y:231.5},0).wait(1).to({scaleY:1,skewY:0.7,y:231.6},0).wait(1).to({scaleX:1,scaleY:1,skewY:1.1,y:231.5},0).wait(1).to({scaleX:1,scaleY:1,skewY:1.6},0).wait(1).to({scaleX:1,scaleY:0.99,skewY:2.3,y:231.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewY:3.1,y:231.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewY:4},0).wait(1).to({scaleX:0.99,scaleY:0.98,skewY:5.1,y:231.6},0).wait(1).to({scaleX:0.99,scaleY:0.98,skewY:6.5},0).wait(1).to({scaleX:0.99,scaleY:0.97,skewY:8},0).wait(1).to({scaleX:0.98,scaleY:0.97,skewY:9.8},0).wait(1).to({scaleX:0.98,scaleY:0.96,skewY:11.9},0).wait(1).to({scaleX:0.97,scaleY:0.95,skewY:14.4},0).wait(1).to({scaleX:0.97,scaleY:0.94,skewY:17.3},0).wait(1).to({scaleX:0.96,scaleY:0.93,skewY:20.7,y:231.5},0).wait(1).to({scaleX:0.96,scaleY:0.92,skewY:24.9,y:231.6},0).wait(1).to({scaleX:0.95,scaleY:0.9,skewY:29.9},0).wait(1).to({scaleX:0.94,scaleY:0.88,skewY:36.3},0).wait(1).to({scaleX:0.92,scaleY:0.85,skewY:44.5},0).wait(1).to({scaleX:0.9,scaleY:0.81,skewY:56},0).wait(1).to({regX:232.7,regY:231.6,scaleX:0.87,scaleY:0.76,skewY:73.7},0).to({_off:true,scaleX:0.9,scaleY:0.82,skewY:101},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},1).wait(1).to({regX:232.8,regY:232.6,scaleX:0.92,scaleY:0.87,skewY:122.8,x:232.7,y:232.6},0).wait(1).to({scaleX:0.93,scaleY:0.9,skewY:136.4},0).wait(1).to({scaleX:0.94,scaleY:0.92,skewY:145.7},0).wait(1).to({scaleX:0.95,scaleY:0.94,skewY:152.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,skewY:157.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,skewY:161.8},0).wait(1).to({scaleX:0.96,scaleY:0.97,skewY:165.2,x:232.6},0).wait(1).to({scaleX:0.96,scaleY:0.97,skewY:168},0).wait(1).to({scaleX:0.97,scaleY:0.98,skewY:170.4,x:232.7},0).wait(1).to({scaleX:0.97,scaleY:0.98,skewY:172.3,x:232.6},0).wait(1).to({scaleX:0.97,scaleY:0.99,skewY:174,x:232.7},0).wait(1).to({scaleX:0.97,scaleY:0.99,skewY:175.4,x:232.6},0).wait(1).to({scaleX:0.97,scaleY:0.99,skewY:176.5},0).wait(1).to({scaleX:0.97,scaleY:0.99,skewY:177.5,x:232.7},0).wait(1).to({scaleX:0.98,scaleY:1,skewY:178.3},0).wait(1).to({scaleY:1,skewY:178.9,x:232.6},0).wait(1).to({scaleX:0.98,scaleY:1,skewY:179.4},0).wait(1).to({skewY:179.7},0).wait(1).to({regY:231.5,scaleY:1,skewY:180,x:232.7,y:231.5},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).wait(1).to({regX:232.7,regY:232.6,skewY:0.1,x:232.7,y:232.7},0).wait(1).to({scaleX:0.99,scaleY:1,skewY:0.6,y:232.6},0).wait(1).to({scaleX:0.99,scaleY:1,skewY:1.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewY:2.8},0).wait(1).to({scaleX:0.98,scaleY:0.99,skewY:4.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,skewY:7.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,skewY:10.6},0).wait(1).to({scaleX:0.97,scaleY:0.95,skewY:15.3},0).wait(1).to({scaleX:0.96,scaleY:0.93,skewY:21.7,y:232.5},0).wait(1).to({scaleX:0.94,scaleY:0.9,skewY:30.9},0).wait(1).to({scaleX:0.92,scaleY:0.85,skewY:45.3},0).wait(1).to({regY:231.6,scaleX:0.87,scaleY:0.76,skewY:73.7,x:232.8,y:231.6},0).to({_off:true,scaleX:0.9,scaleY:0.82,skewY:101},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},1).wait(1).to({regX:216.1,regY:231.5,scaleX:0.92,scaleY:0.87,skewY:122.8,x:236.4,y:218.6},0).wait(1).to({scaleX:0.94,scaleY:0.9,skewY:136.4,x:236.5,y:220.8},0).wait(1).to({scaleX:0.95,scaleY:0.92,skewY:145.7,x:236.3,y:222.6},0).wait(1).to({scaleX:0.96,scaleY:0.94,skewY:152.4,x:235.9,y:224.1},0).wait(1).to({scaleX:0.97,scaleY:0.95,skewY:157.7,x:235.5,y:225.4},0).wait(1).to({scaleX:0.98,scaleY:0.96,skewY:161.8,x:235.1,y:226.5},0).wait(1).to({scaleX:0.98,scaleY:0.97,skewY:165.2,x:234.7,y:227.3},0).wait(1).to({scaleX:0.98,scaleY:0.97,skewY:168,x:234.4,y:228.1},0).wait(1).to({scaleX:0.99,scaleY:0.98,skewY:170.4,x:234,y:228.8},0).wait(1).to({scaleX:0.99,scaleY:0.98,skewY:172.3,x:233.7,y:229.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewY:174,x:233.5,y:229.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewY:175.4,x:233.3,y:230.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewY:176.5,x:233,y:230.5},0).wait(1).to({scaleX:1,scaleY:0.99,skewY:177.5,x:232.9,y:230.8},0).wait(1).to({scaleX:1,scaleY:1,skewY:178.3,x:232.7,y:231},0).wait(1).to({scaleY:1,skewY:178.9,x:232.6,y:231.2},0).wait(1).to({scaleX:1,scaleY:1,skewY:179.4,x:232.5,y:231.3},0).wait(1).to({scaleX:1,skewY:179.7,y:231.4},0).wait(1).to({regX:232.8,scaleY:1,skewY:180,x:215.8,y:231.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465.6,463);


(lib.Click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(682,312.9,1,1,0,0,0,350.1,454.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:681.7,y:313.6},0).wait(1).to({x:681.4,y:314.3},0).wait(1).to({x:681.2,y:315},0).wait(1).to({x:680.8,y:315.9},0).wait(1).to({x:680.5,y:316.9},0).wait(1).to({x:680,y:317.9},0).wait(1).to({x:679.6,y:319.1},0).wait(1).to({x:679.1,y:320.4},0).wait(1).to({x:678.5,y:321.9},0).wait(1).to({x:677.9,y:323.5},0).wait(1).to({x:677.2,y:325.3},0).wait(1).to({x:676.4,y:327.3},0).wait(1).to({x:675.6,y:329.6},0).wait(1).to({x:674.6,y:332.1},0).wait(1).to({x:673.5,y:335},0).wait(1).to({x:672.3,y:338.2},0).wait(1).to({x:670.9,y:341.9},0).wait(1).to({x:669.3,y:346.1},0).wait(1).to({x:667.4,y:350.9},0).wait(1).to({x:665.3,y:356.5},0).wait(1).to({x:662.8,y:363},0).wait(1).to({x:660,y:370.3},0).wait(1).to({x:657,y:378.3},0).wait(1).to({x:653.8,y:386.7},0).wait(1).to({x:650.6,y:394.9},0).wait(1).to({x:647.8,y:402.4},0).wait(1).to({x:645.2,y:409.1},0).wait(1).to({x:643,y:414.9},0).wait(1).to({x:641,y:420},0).wait(1).to({x:639.3,y:424.5},0).wait(1).to({x:637.8,y:428.4},0).wait(1).to({x:636.5,y:431.8},0).wait(1).to({x:635.4,y:434.9},0).wait(1).to({x:634.3,y:437.6},0).wait(1).to({x:633.4,y:440.1},0).wait(1).to({x:632.5,y:442.3},0).wait(1).to({x:631.7,y:444.3},0).wait(1).to({x:631,y:446.2},0).wait(1).to({x:630.4,y:447.8},0).wait(1).to({x:629.8,y:449.3},0).wait(1).to({x:629.3,y:450.7},0).wait(1).to({x:628.8,y:452},0).wait(1).to({x:628.4,y:453.1},0).wait(1).to({x:628,y:454.1},0).wait(1).to({x:682,y:312.9},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(331.9,-141.2,700.2,908.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:655,regY:383.5,x:28.7,y:42.9},0).wait(1).to({x:28.8,y:42.7,alpha:0.002},0).wait(1).to({x:28.9,y:42.5,alpha:0.004},0).wait(1).to({x:29.1,y:42.2,alpha:0.008},0).wait(1).to({x:29.4,y:41.8,alpha:0.013},0).wait(1).to({x:29.7,y:41.2,alpha:0.019},0).wait(1).to({x:30.1,y:40.5,alpha:0.027},0).wait(1).to({x:30.5,y:39.7,alpha:0.036},0).wait(1).to({x:31.1,y:38.7,alpha:0.047},0).wait(1).to({x:31.7,y:37.6,alpha:0.061},0).wait(1).to({x:32.5,y:36.2,alpha:0.076},0).wait(1).to({x:33.4,y:34.7,alpha:0.094},0).wait(1).to({x:34.4,y:32.9,alpha:0.114},0).wait(1).to({x:35.6,y:30.8,alpha:0.137},0).wait(1).to({x:36.9,y:28.5,alpha:0.164},0).wait(1).to({x:38.4,y:25.9,alpha:0.194},0).wait(1).to({x:40.1,y:22.9,alpha:0.227},0).wait(1).to({x:42,y:19.6,alpha:0.265},0).wait(1).to({x:44.1,y:15.9,alpha:0.307},0).wait(1).to({x:46.4,y:11.9,alpha:0.353},0).wait(1).to({x:48.8,y:7.5,alpha:0.402},0).wait(1).to({x:51.3,y:3,alpha:0.453},0).wait(1).to({x:54,y:-1.6,alpha:0.506},0).wait(1).to({x:56.6,y:-6.2,alpha:0.558},0).wait(1).to({x:59.1,y:-10.7,alpha:0.609},0).wait(1).to({x:61.5,y:-14.8,alpha:0.657},0).wait(1).to({x:63.7,y:-18.7,alpha:0.701},0).wait(1).to({x:65.7,y:-22.3,alpha:0.741},0).wait(1).to({x:67.6,y:-25.5,alpha:0.777},0).wait(1).to({x:69.2,y:-28.3,alpha:0.81},0).wait(1).to({x:70.6,y:-30.9,alpha:0.839},0).wait(1).to({x:71.9,y:-33.1,alpha:0.864},0).wait(1).to({x:73,y:-35.1,alpha:0.887},0).wait(1).to({x:74,y:-36.8,alpha:0.907},0).wait(1).to({x:74.9,y:-38.4,alpha:0.924},0).wait(1).to({x:75.7,y:-39.7,alpha:0.939},0).wait(1).to({x:76.3,y:-40.9,alpha:0.952},0).wait(1).to({x:76.9,y:-41.8,alpha:0.964},0).wait(1).to({x:77.4,y:-42.7,alpha:0.973},0).wait(1).to({x:77.8,y:-43.4,alpha:0.981},0).wait(1).to({x:78.1,y:-44,alpha:0.988},0).wait(1).to({x:78.3,y:-44.4,alpha:0.993},0).wait(1).to({x:78.6,y:-44.8,alpha:0.997},0).wait(1).to({regX:644.1,regY:516.1,x:80.4,y:-53.6,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,13,60.2,69.6);


// stage content:



(lib.myFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var face = this.face;
		face.addEventListener("click", clickme);
		function clickme(m){
			face.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.face = new lib.FaceIt();
	this.face.setTransform(299.3,334.5,1,1,0,0,0,232.8,231.5);

	this.timeline.addTween(cjs.Tween.get(this.face).wait(1));

	// Layer 1
	this.instance = new lib.clicker();
	this.instance.setTransform(387.4,160.9,1,1,0,0,0,30.1,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(366.5,443,465.6,463);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;