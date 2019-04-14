package com.ostrowski.behealth;

import android.animation.ObjectAnimator;
import android.animation.PropertyValuesHolder;
import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class SpeedTest extends AppCompatActivity {

    private ImageView imageView;
    Timestamp timestamp;
    Timestamp userTimeStamp;
    Handler handler=new Handler(  );
    Context context=this;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_speed_test );
        set();
    }

    private void set() {
        new Thread( new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep( 2000 );
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                handler.post( new Runnable() {
                    @Override
                    public void run() {
                        speedtesting();
                    }
                } );
            }
        } ).start();
    }
    public static void ImageViewAnimatedChange(Context c, final ImageView v, final int new_image) {
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
                v.setImageResource( new_image );
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

    public void speedtesting(){
        Random random = new Random(  );
        int rand=random.nextInt()%8;
        switch (rand){
            case 0:
                imageView=findViewById( R.id.imageView15 );
                break;
            case 1:
                imageView=findViewById( R.id.imageView16 );
                break;
            case 2:
                imageView=findViewById( R.id.imageView17 );
                break;
            case 3:
                imageView=findViewById( R.id.imageView18 );
                break;
            case 4:
                imageView=findViewById( R.id.imageView19 );
                break;
            case 5:
                imageView=findViewById( R.id.imageView20 );
                break;
            case 6:
                imageView=findViewById( R.id.imageView21 );
                break;
            case 7:
                imageView=findViewById( R.id.imageView22 );
                break;

        }
        timestamp=new Timestamp( System.currentTimeMillis() );
       // imageView.setBackgroundColor( getResources().getColor( R.color.pink ) );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient3);
    }


    public void speedtestclick(View view) {
        imageView=findViewById( R.id.imageView15 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);
        next();
    }

    public void speedtestclick2(View view) {
        imageView=findViewById( R.id.imageView16 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);
        next();
    }

    public void speedtestclick3(View view) {
        imageView=findViewById( R.id.imageView17 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);
        next();
    }

    public void speedtestclick4(View view) {
        imageView=findViewById( R.id.imageView18 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);        next();
    }

    public void speedtestclick5(View view) {
        imageView=findViewById( R.id.imageView19 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);
        next();
    }

    public void speedtestclick6(View view) {
        imageView=findViewById( R.id.imageView20 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);
        next();
    }

    public void speedtestclick7(View view) {
        imageView=findViewById( R.id.imageView21 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);
        next();
    }

    public void speedtestclick8(View view) {
        imageView=findViewById( R.id.imageView22 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);
        next();
    }

    public void speedtestclick9(View view) {
        imageView=findViewById( R.id.imageView23 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);
        next();
    }

    public void speedtestclick10(View view) {
        imageView=findViewById( R.id.imageView24 );
        userTimeStamp=new Timestamp( System.currentTimeMillis() );
        ImageViewAnimatedChange(  context,imageView,R.drawable.gradient2);
        next();
    }

    public void next(){
        new Thread( new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep( 1000 );
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                handler.post( new Runnable() {
                    @Override
                    public void run() {
                        Intent intent = new Intent( context,Stress.class );
                        startActivity( intent );
                    }
                } );
            }
        } ).start();
    }

}
