package com.ostrowski.behealth;
import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.TextView;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;


public class Pop extends Activity {

    int [] anserw=new int[3];
    int counter=0;
    TextView question;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.alarm_pop_up);
        question=findViewById( R.id.question );
    }



    public void no(View view) {
        anserw[counter]=3;
        counter++;
        nextQuestion();
    }

    public void nwm(View view) {
        anserw[counter]=2;
        counter++;
        nextQuestion();
    }

    public void maybe(View view) {
        anserw[counter]=1;
        counter++;
        nextQuestion();
    }

    public void yes(View view) {
        anserw[counter]=0;
        counter++;
        nextQuestion();
    }
    int suma=0;
    public void nextQuestion(){
        if(counter==1){
            TextViewAnimatedChange(this,question,"I like what I do "   );
        }

        if(counter==2){
            TextViewAnimatedChange(this,question,"I'm happy with myself "  );
        }

        if(counter==3) {

            for(int i=0;i<3;i++){
                suma = suma + anserw[i];
            }

            suma=(suma*100)/3;
            new Thread( new Runnable() {
                @Override
                public void run() {
                    sent();
                }
            } ).start();
            finish();
        }
    }
    private void sent() {
        try {
            String url = " http://10.250.194.204:8123/post?depression=" + Integer.toString( suma );
            URL obj = new URL( url );
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
            // optional default is GET
            con.setRequestMethod( "GET" );
            //add request header
            //  con.setRequestProperty("User-Agent", USER_AGENT);
            int responseCode = con.getResponseCode();
            //System.out.println("\nSending 'GET' request to URL : " + url);
            //System.out.println("Response Code : " + responseCode);
            BufferedReader in = new BufferedReader(
                    new InputStreamReader( con.getInputStream() ) );
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                response.append( inputLine );
            }
            in.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void TextViewAnimatedChange(Context c, final TextView v, final String new_text) {
        final Animation anim_out = AnimationUtils.loadAnimation( c, android.R.anim.fade_out );
        final Animation anim_in = AnimationUtils.loadAnimation( c, android.R.anim.fade_in );
        anim_out.setAnimationListener( new Animation.AnimationListener() {
            @Override
            public void onAnimationStart(Animation animation) {
            }

            @Override
            public void onAnimationRepeat(Animation animation) {
            }

            @Override
            public void onAnimationEnd(Animation animation) {
                v.setText( new_text );
                anim_in.setAnimationListener( new Animation.AnimationListener() {
                    @Override
                    public void onAnimationStart(Animation animation) {
                    }

                    @Override
                    public void onAnimationRepeat(Animation animation) {
                    }

                    @Override
                    public void onAnimationEnd(Animation animation) {
                    }
                } );
                v.startAnimation( anim_in );
            }
        } );
        v.startAnimation( anim_out );
    }

}