

const generateDynamicColorClass = (baseClass, colorValue, colorThresholds) => {
  const colorClass = getColorClass(colorValue, colorThresholds);
  return `${baseClass} ${colorClass}`;
};

const getColorClass = (value, thresholds) => {

  
    // Find the color class based on the provided value and thresholds
    const selectedColor =
      thresholds.find((item) => value === item.type) || thresholds[thresholds.length - 1];
  
    // console.log('Selected Color:', selectedColor.colorClass);
    return selectedColor.colorClass;
  };
  
  
  

export default generateDynamicColorClass;
