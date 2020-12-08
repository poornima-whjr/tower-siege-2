class Rope{
    constructor(objectA,pointB){
        this.objectA=objectA;
        this.pointB=pointB;
        var options={
            bodyA:objectA,
            pointB:pointB,
            length:10,
            stiffness:0.06
        }  
        this.rope=Constraint.create(options);
        World.add(world, this.rope);   
    }

    display(){
       if(this.rope.bodyA){
            stroke("brown");
            strokeWeight(5);
            line(this.objectA.position.x,this.objectA.position.y,
                this.pointB.x,this.pointB.y); 
        }      
    }

    fly(){
        this.rope.bodyA=null;
    }

    attach(body){
        Matter.Body.setPosition(body,{x:300,y:350});
        this.rope.bodyA=body;
    }
}