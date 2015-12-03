var column1 = ('a,h,o,v,cc,jj')
var column2 = ('b,i,p,w,dd,kk')
var column3 = ('c,j,q,x,ee,ll')
var column4 = ('d,k,r,y,ff,mm')
var column5 = ('e,l,s,z,gg,nn')
var column6 = ('f,m,t,aa,hh,oo')
var column7 = ('g,n,u,bb,ii,pp')

var row1 = ('a,b,c,d,e,f,g')
var row2 = ('h,i,j,k,l,m,n')
var row3 = ('o,p,q,r,s,t,u')
var row4 = ('v,w,x,y,z,aa,bb')
var row5 = ('cc,dd,ee,ff,gg,hh,ii')
var row6 = ('jj,kk,ll,mm,nn,oo,pp')






var player1;
var player2;

var red = ('red checker');
var black = ('black checker');

var moveRed;
var moveBlack;















var winningCombos = [
  //horizontal win combinations
  ('a,b,c,d'),
  ('b,c,d,e'),
  ('c,d,e,f'),
  ('d,e,f,g'),
  ('h,i,j,k'),
  ('i,j,k,l'),
  ('j,k,l,m'),
  ('k,l,m,n'),
  ('o,p,q,r'),
  ('p,q,r,s'),
  ('q,r,s,t'),
  ('r,s,t,u'),
  ('v,w,x,y'),
  ('w,x,y,z'),
  ('x,y,z,aa'),
  ('y,z,aa,bb'),
  ('cc,dd,ee,ff'),
  ('dd,ee,ff,gg'),
  ('ee,ff,gg,hh'),
  ('ff,gg,hh,ii'),
  ('jj,kk,ll,mm'),
  ('kk,ll,mm,nn'),
  ('ll,mm,nn,oo'),
  ('mm,nn,oo,pp'),

  //veritcal win combinations
  ('a,h,o,v'),
  ('h,o,v,cc'),
  ('o,v,cc,jj'),
  ('b,i,p,w'),
  ('i,p,w,dd'),
  ('p,w,dd,kk'),
  ('c,j,q,x'),
  ('j,q,x,ee'),
  ('q,x,ee,ll'),
  ('d,k,r,y'),
  ('k,r,y,ff'),
  ('r,y,ff,mm'),
  ('e,l,s,z'),
  ('l,s,z,gg'),
  ('s,z,gg,nn'),
  ('f,m,t,aa'),
  ('m,t,aa,hh'),
  ('t,aa,hh,oo'),
  ('g,n,u,bb'),
  ('n,u,bb,ii'),
  ('u,bb,ii,pp'),

  //diagonal right win combinations
  ('o,w,ee,mm'),
  ('h,p,x,ff'),
  ('p,x,ff,nn'),
  ('a,i,q,y'),
  ('i,q,y,gg'),
  ('q,y,gg,oo'),
  ('b,j,r,z'),
  ('j,r,z,hh'),
  ('r,z,hh,pp'),
  ('c,k,s,aa'),
  ('k,s,aa,ii'),
  ('d,l,t,bb'),

  //diagonal left win combinations
  ('d,j,p,v'),
  ('e,k,q,w'),
  ('k,q,w,cc'),
  ('f,l,r,x'),
  ('l,r,x,dd'),
  ('r,x,dd,jj'),
  ('g,m,s,y'),
  ('m,s,y,ee'),
  ('s,y,ee,kk'),
  ('n,t,z,ff'),
  ('t,z,ff,ll'),
  ('u,aa,gg,mm'),




  for (var i = 0; i < winningCombinations.length; i++) {
    var combo = winningCombinations[i];
      if(
        this.gameState[combo[0]] == this.gameState[combo[1]]
          &&
        this.gameState[combo[1]] == this.gameState[combo[2]]
          //&&
        //this.gameState[combo[0]] == this.gameState[combo[2]]
      ){





  .connectFourGame{
    height: 100%;
    width: 100%;
    margin-top: 20px;
    margin-left: 30px;
  }

  #game-board {
    background-color: yellow;
    display: inline-block;
    vertical-align: top;
    width: 700px;
    height: 500px;
  }

  .messageBoard {
    background-color: white;
    display: inline-block;
    width: 300px;
    height: 400px;
    margin-top: 0;
    margin-left: 60px;
    margin-left: 60px;
    border: 2px;
    border-style: solid;
    border-color: gray;

  }

  .redBoard {
    display: inline-block;
    color: red;
    text-decoration: underline;
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
  }

  .blackBoard {
    display: inline-block;
    text-align: center;
    color: black;
    text-decoration: underline;
    margin-left: 50px;
    margin-right: 50px;
  }

  .messages {
    text-align: center;

  }

  h2 {
    color: black;
    text-align: center;
  }

  h3 {
    color: black;
    text-align: center;

  }










  /////




  <div class="ConnectFourGame">

      <div class="legLeft">

      </div>

      <div id="game-board">

          <table>

              <tr>

                <td>

                </td>

              </tr>

          </table>

      </div>

      <div class="legRight">

      </div>

  <div class="messageBoard">

    <div>
      <h2>Score Board</h2>
    </div>

    <div class="redBoard">
      <h3>Red</h3>
    </div>

    <div class="blackBoard">
      <h3>Black</h3>
    </div>

    <div class="messages">
      <h3>Messages</h3>

    </div>


  </div>

</div>
