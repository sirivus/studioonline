package org.cakelab.json.codec;

/**
 * Determines configuration of JSON string formatter.
 * @author homac
 *
 */
public class JSONStringFormatterConfiguration {
	
	/** sorts members of compound types when converting objects into a json string.
	 * <p><b>Default:</b> <em>true</em></p>*/
	public boolean sortMembers              = true;
	
	/** Adds line breaks and indenting to create more human readable output during 
	 * conversion of object into a json string.
	 * <p><b>Default:</b> <em>true</em></p>*/
	public boolean indenting                = true;
	
	/** Uses unicode conform encoding of special characters (i.e. &#92;u&lt;UNICODE_NUMBER&gt;) 
	 * when converting objects into strings. 
	 * <p><b>Default:</b> <em>true</em></p>*/
	public boolean unicodeValues            = true;

	/** 
	 * Default configuration parameters for {@link #sortMembers}, 
	 * {@link #indenting} and {@link #unicodeValues}.
	 */
	public JSONStringFormatterConfiguration() {
		// intentionally empty
	}
	
	
	
}
