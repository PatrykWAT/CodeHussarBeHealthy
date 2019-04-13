package com.ostrowski.behealth;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.SeekBar;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ankieta extends Activity {

    SeekBar seekBar;
    SeekBar seekBar2;
    SeekBar seekBar3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.ankieta);
        seekBar=findViewById( R.id.seekBar );
        seekBar2=findViewById( R.id.seekBar2 );
        seekBar3=findViewById( R.id.seekBar3 );
    }

    int feel=0;
    int fear=0;
    int pain=0;

    public void savelek(View view) {
        feel=seekBar.getProgress();
        fear=seekBar2.getProgress();
        pain=seekBar3.getProgress();

        new Thread( new Runnable() {
            @Override
            public void run() {
                sent();
            }
        } ).start();
        finish();

    }

    private void sent() {
        try {
            String url = " http://10.250.194.204:8123/post?feel=" + Integer.toString( feel )
                    +"&fear="+Integer.toString( fear )
                    +"&pain="+Integer.toString( pain );

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
}
