// 代理对象
function _proxy(target) {  
    return new Proxy(target, {
      set(target, property, value, receiver) {  
        // 获取当前属性的原始值  
        const oldValue = target[property];  
          
        // 打印属性值的前后变化  
        console.log(`Property '${property}' changed, ${oldValue} => ${value}`);  
          
        // 设置新的属性值  
        Reflect.set(target, property, value, receiver);  
          
        // 返回 true 表示成功设置  
        return true;  
      }  
    });  
  }  

const obj = _proxy({ a: null });
