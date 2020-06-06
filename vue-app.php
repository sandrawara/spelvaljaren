<?php
/*
Plugin Name: Spelväljaren
Description: Spelväljarens shortcode
Version: 1.0
*/

//Register scripts to use
function func_load_vuescripts() {
    wp_register_script('wpvue_vuejs', 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js');
    wp_register_script('my_vuecode', plugin_dir_url( __FILE__ ).'vue_app.js', 'wpvue_vuejs', true );
    wp_register_script( 'script', plugin_dir_url( __FILE__ ).'flip.js', array('jquery'), null, true);
}

//Include custom jQuery
function shapeSpace_include_custom_jquery() {
wp_deregister_script('jquery');
wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);
}

add_action('wp_enqueue_scripts', 'shapeSpace_include_custom_jquery');

//Tell WordPress to register the scripts 
add_action('wp_enqueue_scripts', 'func_load_vuescripts');

function my_custom_styles() {
  // Register my custom stylesheet
  wp_register_style('custom-styles', plugin_dir_url(__FILE__).'custom-style.css');
  // Load my custom stylesheet
  wp_enqueue_style('custom-styles');
}

add_action('wp_enqueue_scripts', 'my_custom_styles');

//Return shortcode
function func_wp_vue(){
  //Add Vue.js
  wp_enqueue_script('wpvue_vuejs');
  //Add my code to it
  wp_enqueue_script('my_vuecode');
  wp_enqueue_script('script');
  wp_enqueue_script('plugin-style');
  wp_enqueue_script('jquery');

  //Build 
  $str= "<div id='divWpVue'>".
  '<template>
  <!--Questions-->
  <div id="form-game"> 
  <div class="flip-card-front">
      <h1 id="gameh1">Spelväljaren</h1>
      <img id="dice" src="/wp-content/plugins/vue_app/dice.png" alt="Dice"> 
      <p id="info">Med några snabba frågor hittar <br> spelväljaren rätt spel inför spelkvällen</p>
  </div>

  <button id="startBtn">Starta nu</button>
  <div class="flip-card-back">
  <img id="dice-back" src="/wp-content/plugins/vue_app/dicegreen.png" alt="Dice"> 
     
        <!--Games for adults-->
          <div v-if="step===1">
              <h3 id="h3White">Spelar ni tillsammans med barn?</h3>           
          </div>

          <div v-if="step===2">
            <h3 id="h3White">Vill ni spela strategiska spel?</h3>
          </div>

          <div v-if="step===3">
            <h3 id="h3White">Vill ni ha ett spel som passar nästa <br> fest eller middagsbjudning?</h3>
          </div>

          <div v-if="step===4">
            <h3 id="h3White">Vill ni ha spel med ordlekar?</h3>
          </div>

          <div v-if="step===5">
            <h3 id="h3White">Vill ni spela äventysspel?</h3>
          </div>
 
          <div v-if="step===6">
            <h3 id="h3White">Frågespel?</h3>
          </div>

          <div v-if="step===7">
            <h3 id="h3White">Vill ni samla på resurser?</h3>
          </div>

          <div v-if="step===8">
            <h3 id="h3White">Gillar ni att bygga?</h3>
          </div>

          <div v-if="step===9">
            <h3 id="h3White">Gillar ni fantasy?</h3>
          </div>

          <div v-if="step===19">
            <h3 id="h3White">Spel med humor?</h3>
          </div>

          <!--Games for children-->  
          <div v-if="step===10">
            <h3 id="h3White">Ska ni spela tillsammans med yngre barn?</h3>
          </div>

          <div v-if="step===11">
            <h3 id="h3White">Sjöfart och pirater?</h3>
          </div>

          <div v-if="step===12">
            <h3 id="h3White">Vill ni spela strategiska spel?</h3>
          </div>

          <div v-if="step===13">
            <h3 id="h3White">Vill ni samla på resurser och bygga?</h3>
          </div>

          <div v-if="step===14">
            <h3 id="h3White">Krigsspel?</h3>
          </div>

          <!--Older children-->
          <div v-if="step===15">
            <h3 id="h3White">Vill ni spela äventyrspel?</h3>
          </div>

          <div v-if="step===20">
            <h3 id="h3White">Vill ni samarbeta?</h3>
          </div>

          <div v-if="step===21">
            <h3 id="h3White">Vill ni ha spel med djur?</h3>
          </div>

          <!--Younger children-->
          <div v-if="step===16">
            <h3 id="h3White">Vill ni spela äventysspel?</h3>
          </div>

          <div v-if="step===17">
            <h3 id="h3White">Vill ni ha spel med djur?</h3>
          </div>

          <div v-if="step===18">
            <h3 id="h3White">Vill ni spela strategiska spel?</h3>
          </div>

          <!--Result-->
          <div v-if="step===0">
            {{ hide() }} <!--Function hide div-->
            <h3 id="h3White">Spelväljaren rekommenderar:</h3>
            
            <div class="item" v-for="item in finalSortingArray" :key="item.name">
                <div id="horizontalOutput">
                  <div id="imgFrame"><img class="img-result" :src="item.image" :alt="item.name"/></div>
                  <div id="line"></div>
                  <div id="vertical">
                    <h3 id="headingGame">{{item.name}}</h3>
                    <p id="aboutGame">{{item.about}}</p>
                </div>
              </div>

              <div id="outputBtn">
                <button id="startOver" v-on:click="reset">Börja om</button>
                <a id="gameResult" :href="item.link" target="_blank">Köp spel</a>     
              </div>
            </div>      
          </div>

          <div id="horizontal" v-if="step!==0">
              <!--div selection-->    
              <button id="YesBtn" v-on:click="yesAnswer">Ja</button>   
              <button id="NoBtn" v-on:click="noAnswer">Nej</button>                   
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  
</template>
</div>';

//Return to display
return $str;
} // end function

//Add shortcode to WordPress
add_shortcode( 'spelväljaren', 'func_wp_vue' );
?>
   

