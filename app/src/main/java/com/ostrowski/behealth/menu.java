package com.ostrowski.behealth;

import android.animation.ObjectAnimator;
import android.animation.PropertyValuesHolder;
import android.content.Intent;
import android.net.Uri;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import java.util.Random;

public class menu extends AppCompatActivity {

    Button button;
    ProgressBar progressBar;
    ProgressBar progressBar2;
    TextView pulse;

    int counter = 0;
    private Handler handler = new Handler();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_menu );

        manager();

    }

    public void manager() {
        Runnable start_clock = new Runnable() {
            @Override
            public void run() {
                while (true)
                    set();
            }
        };
        new Thread( start_clock ).start();
    }

    private void set() {
        try {
            Thread.sleep( 3000 );
            counter++;
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void samopoczucie(View view) {
        Intent intent = new Intent( this, ankieta.class );
        startActivity( intent );
    }

    public void testBecka(View view) {
        Intent intent = new Intent( this, Pop.class );
        startActivity( intent );
    }
}


