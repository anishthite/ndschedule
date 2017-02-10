/**
 *  @author Anish Thite
 *  Applet to show ND schedule
 *  
 *  */
//import necessary classes
import java.applet.*;
import java.awt.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class scheduleapplet extends Applet {

	public static void main(String[] args) {
		// TODO 
		//finish get_CurrentPeriod
		//get_scheduleType, get_currentPeriod,calculate timeRemaining
		get_time();
	}
	/**
	 * 
	 * @return current time
	 */
	public static String get_time(){	
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
	
		String timeunbroken = new String(dateFormat.format(date));
		String time = new String(timeunbroken.substring(11,16));
		System.out.println(time);
		return (time);
	}
	/**
	 * 
	 * @return current day
	 */
	public static int get_day(){
		Calendar calendar = Calendar.getInstance();
		int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);//thurs = 5
		return dayOfWeek;
	}
	/**
	 * 
	 */
	public static String choose_scheduleType(int dayOfWeek, String specialSchedule){
		
	String scheduleType = new String();
	if (specialSchedule == "Mass"){}
	else if (specialSchedule == "Delayed Opening") {}
	else if (specialSchedule == "Early Dismissial 2:00") {}
	else if (specialSchedule == "Early Dismissial 11:57") {}
	else{
		if (dayOfWeek == 2){
			//TA
		}
		else{
			scheduleType = "otherSchedule";
		}
	}
	
	return scheduleType;	
	}
	public static void get_currentPeriod(int time, String scheduleType){
		String[][] otherSchedule = {{"09:07","10:08","11:09","11:30","11:49","12:08","12:27","1:28","2:30"},
									 {"1","2","3","lunch1","lunch2","lunch3","lunch4","5","6"}};
		
		
	}

}
