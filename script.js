$(document).ready(function () {
  var canvas = document.querySelector('canvas')
  var ctx = canvas.getContext('2d')
  var heroimage1 = document.querySelector('#hero')
  var heroimage2 = document.querySelector('#hero2')
  var heroimage3 = document.querySelector('#hero3')

  var heroimage4 = document.querySelector('#hero4')
  var heroimage5 = document.querySelector('#hero5')
  var heroimage6 = document.querySelector('#hero6')

  var heroimage7 = document.querySelector('#hero7')
  var heroimage8 = document.querySelector('#hero8')

  var heroImages = [heroimage1, heroimage2, heroimage3]
  var heroImages2 = [heroimage4, heroimage5, heroimage6]

  var bubble = document.querySelector('#bubble')

  var chatBox = document.querySelector('input')
  var $chatBoxs = $(document).find('input')
  // console.log(container.width)

  // window.addEventListener('resize', resizeCanvas, false)

  window.addEventListener('orientationchange', resizeCanvas, false)

  // resize the canvas if necessary
  function resizeCanvas () {
    var fullWidth = window.innerWidth
    var fullHeight = window.innerHeight
    canvas.width = fullWidth
    canvas.height = fullHeight
  }

  resizeCanvas()

  var chatBox = document.querySelector('input')
  // console.log(chatBox);

// game constructor, immortal as NPC
  function Fantasy () {
    heroArr = []
    this.immortal = new Immortal()
  }

  function Immortal () {

  }

  function Hero () {
    this.x = (canvas.width / 2)
    this.y = canvas.height * 0.81
    this.image = heroImages2[0]
  }

  Hero.prototype.walkingleft = function () {
     if(hero.image === heroImages2[0]) {
       return heroImages[1]
     } else if (hero.image === heroImages[1]) {
       return heroImages[2]
     } else if (hero.image === heroImages[2]) {
       return heroImages[1]
     }
  }

  Hero.prototype.walkingright = function () {
     if(hero.image === heroImages2[0]) {
       return heroImages2[1]
     } else if (hero.image === heroImages2[1]) {
       return heroImages2[2]
     } else if (hero.image === heroImages2[2]) {
       return heroImages2[1]
     }
  }

  var keysDown = {}


  addEventListener('keydown', function (e) {
    keysDown[e.key] = e.code
    // console.log(keysDown);
  })

  addEventListener('keyup', function (e) {
    delete keysDown[e.key]
    hero.image = heroImages2[0]
  })

  function walk () {
    if ('ArrowLeft' in keysDown) {
      hero.x -= 6
      hero.image = hero.walkingleft()
    }
    if ('ArrowRight' in keysDown) {
      hero.x += 6
      hero.image = hero.walkingright()
    }
    if ('1' in keysDown) {
      hero.image = heroimage7
    }
    if ('2' in keysDown) {
      hero.image = heroimage8
    }
    if ('Enter' in keysDown) {
      $chatBoxs.toggleClass('displayNone')
      chatstring += chatBox.value
      chatBox.value = ''
    }
  }
  var chatstring = ''

  setInterval(function () {
    chatstring = ''
  }, 3000)

  function chatting () {
    ctx.font = '20px serif'
    // ctx.drawImage(bubble, hero.x - 250, hero.y - 200)
    ctx.fillText(chatstring, hero.x , hero.y - 50)
    console.log(chatstring);
  }



  var game = new Fantasy()
  var hero = new Hero()
  // container.addEventListener('mousemove', function (e) {
  //   console.log(e.y)
  // })
  function update () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    chatting()
    walk()
    ctx.drawImage(hero.image, hero.x, hero.y)
    requestAnimationFrame(update)
  }
  update()
})
