function Particle(posX, posY)
{
  this.posX = posX;
  this.posY = posY;
  this.velocityX = 1;
  this.velocityY = 0;
  this.size = 1;
  this.schrink = 1;
  this.drag = 1;
  this.gravity = 0;
  this.alpha = 1;
  this.fade = 0;
}

Particle.prototype.update = function()
{
  this.velocityX *= this.drag;
  this.velocityY *=this.drag;
  this.velocityY += this.gravity;
  this.posX += this.velocityX;
  this.posY += this.velocityY;
  this.size *= this.schrink;
  this.alpha -= this.fade;
};

Particle.prototype.render = function(context)
{
  context.fillStyle = "rgba(255, 255, 255, " + this.alpha + ")";
  context.beginPath();
  context.arc(this.posX, this.posY, this.size, 0, 2 * Math.PI, false);
  context.closePath();
  context.fill();
  //context.lineWidth = 5;
  //context.strokeStyle = '#003300';
  //context.stroke();
};
