package com.ostrowski.behealth;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_main );
    }

    public void zaloguj(View view) {
        Intent myIntent = new Intent(this, menu.class);
        startActivity(myIntent);
    }

    public void samopoczucie(View view) {
        Intent intent = new Intent( this, ankieta.class );
        startActivity( intent );
    }
}
