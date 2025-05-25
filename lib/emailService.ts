// lib/emailService.ts
import emailjs from '@emailjs/browser';

// Configuración REAL de EmailJS basada en las imágenes de Liz
const EMAILJS_CONFIG = {
  serviceId: 'service_ay816cm', // Service ID real
  templateContactId: 'template_a2zgyat', // Template ID del primer "Contact Us"
  templateOrderId: 'template_a2zgyat', // Usando el mismo template que funciona
  userId: 'kbeklIHjiKTHwlCFZ', // Public Key real CORREGIDA
};

// Inicializar EmailJS con la clave pública real
emailjs.init(EMAILJS_CONFIG.userId);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface OrderData {
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    notes: string;
  };
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  paymentMethod: string;
}

// Función para formatear precio
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);
};

// Función para enviar email de contacto
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Parámetros que coinciden con el template de EmailJS existente
    const templateParams = {
      customer_name: formData.name, // {{customer_name}} en el template
      customer_email: formData.email, // {{customer_email}} en el template  
      customer_phone: formData.phone, // {{customer_phone}} en el template
      subject: formData.subject, // {{subject}} en el template
      message: formData.message, // {{message}} en el template
      date: new Date().toLocaleString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Bogota'
      }), // {{date}} en el template
      to_email: 'lizrincon1693@gmail.com', // Email destino
      to_name: 'Liz Rincón', // Nombre destino
    };

    console.log('📧 Enviando email de contacto a lizrincon1693@gmail.com...');
    console.log('📋 Datos:', templateParams);

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateContactId,
      templateParams
    );

    console.log('✅ Email de contacto enviado exitosamente!');
    console.log('📊 Respuesta EmailJS:', response.status, response.text);
    return true;
  } catch (error) {
    console.error('❌ Error enviando email de contacto:', error);
    return false;
  }
};

// Función para enviar email de pedido
export const sendOrderEmail = async (orderData: OrderData): Promise<boolean> => {
  try {
    // Formatear lista de productos exactamente como en el template
    const productsList = orderData.items.map(item => 
      `• ${item.name} (Cantidad: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');

    // Parámetros que coinciden con el template de pedidos
    const templateParams = {
      customer_name: orderData.customer.name,
      customer_email: orderData.customer.email,
      customer_phone: orderData.customer.phone,
      customer_address: orderData.customer.address,
      customer_city: orderData.customer.city,
      products_list: productsList,
      total: formatPrice(orderData.total),
      payment_method: orderData.paymentMethod,
      notes: orderData.customer.notes || 'Ninguna',
      order_id: `ORD-${Date.now()}`,
      date: new Date().toLocaleString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Bogota'
      }),
      to_email: 'lizrincon1693@gmail.com', // Email destino
      to_name: 'Liz Rincón', // Nombre destino
    };

    console.log('📧 Enviando email de pedido a lizrincon1693@gmail.com...');
    console.log('🛒 Datos del pedido:', templateParams);

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateOrderId,
      templateParams
    );

    console.log('✅ Email de pedido enviado exitosamente!');
    console.log('📊 Respuesta EmailJS:', response.status, response.text);
    return true;
  } catch (error) {
    console.error('❌ Error enviando email de pedido:', error);
    console.error('💡 Verifica que el template_mcysftq esté configurado correctamente');
    return false;
  }
};

// Función para probar la configuración
export const testEmailService = async (): Promise<boolean> => {
  try {
    const testData: ContactFormData = {
      name: 'Prueba del Sistema EmailJS',
      email: 'test@eleganciaencuero.com',
      phone: '314 247 0366',
      subject: 'Prueba de Configuración',
      message: '🧪 Este es un email de prueba para verificar que EmailJS está funcionando correctamente con la configuración real. Si recibes este mensaje en lizrincon1693@gmail.com, ¡todo está perfecto! 🎉'
    };

    console.log('🧪 Ejecutando prueba de EmailJS...');
    const result = await sendContactEmail(testData);
    
    if (result) {
      console.log('✅ ¡PRUEBA EXITOSA! Email enviado a lizrincon1693@gmail.com');
      console.log('📬 Revisa la bandeja de entrada de Liz');
    } else {
      console.log('❌ La prueba falló. Revisa la configuración y la consola');
    }
    
    return result;
  } catch (error) {
    console.error('❌ Error en prueba de EmailJS:', error);
    return false;
  }
};

// Función para verificar la configuración actual
export const verifyConfiguration = () => {
  console.log('🔧 === CONFIGURACIÓN EMAILJS ACTUAL ===');
  console.log('📧 Email destino: lizrincon1693@gmail.com');
  console.log('🔑 Service ID:', EMAILJS_CONFIG.serviceId);
  console.log('📝 Template Contacto:', EMAILJS_CONFIG.templateContactId);
  console.log('🛒 Template Pedido:', EMAILJS_CONFIG.templateOrderId);
  console.log('🆔 User ID (Public Key):', EMAILJS_CONFIG.userId);
  console.log('✅ Configuración basada en las imágenes reales de EmailJS');
  console.log('==========================================');
};

// Exportar configuración
export const getEmailJSConfig = () => EMAILJS_CONFIG;