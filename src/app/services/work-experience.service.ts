import { Injectable } from '@angular/core';
import { WorkExperience } from '../interfaces/work-experience';

@Injectable({providedIn: 'root'})
export class WorkExperienceService {

  private workExperince : WorkExperience[] = [
    {
      id:  1,
      company: 'Electromecánica Especializada.',
      position: 'Técnico en Informática',
      Dates: '2023 - Actualmente',
      responsibilities: [
        { id: 1, description: 'Instalación y configuración de equipos informáticos, software y sistemas operativos.'},
        { id: 2, description: 'Diagnóstico y solución de problemas técnicos relacionados con hardware, software, redes y sistemas informáticos.'},
        { id: 3, description: 'Brindar asistencia técnica a usuarios para resolver problemas y responder preguntas sobre el uso de la tecnología.'},
        { id: 4, description: 'Configurar y administrar redes informáticas, asegurando su correcto funcionamiento y seguridad.'},
        { id: 5, description: 'Mantener los sistemas y equipos actualizados con las últimas versiones de software y parches de seguridad.'},
        { id: 6, description: 'Administración sistema SIEE (Sistema Integrado Electromecanica Especializada).'},
        { id: 7, description: 'Administrador de sistema NominaEE (Sistema de Nómina de Electromecánica Especializada).'}
      ],
      location: 'Managua, Nicaragua',
      technologies: [
        { id: 1, name: 'Nodejs', version: '10.6.0'},
        { id: 2, name: 'Express', version: '4.17.1'},
        { id: 3, name: 'JavaScript', version: 'ES6'},
        { id: 4, name: 'TypeScript', version: '3.5.3'},
        { id: 5, name: 'HTML', version: '5'},
        { id: 6, name: 'CSS', version: '3'},
        { id: 7, name: 'Angular', version: '8.2.9'},
        { id: 8, name: 'PrimeNG', version: '8.0.3'},
        { id: 9, name: 'ChartJs', version: '2.9.4'},
        { id: 10, name: 'PostgreSQL', version: '13.3'},
        { id: 11, name: 'SQL Server', version: '2012'},
      ],
    },
    {
      id: 2,
      company: 'RC Solution IT',
      position: 'Soporte Técnico -  Empresa DHL Global Forwarding.',
      Dates: '2021 - 2023',
      responsibilities:[
        { id: 1, description: 'Instalación y configuración de equipos informáticos, software y sistemas operativos.'},
        { id: 2, description: 'Diagnóstico y solución de problemas técnicos relacionados con hardware, software, redes y sistemas informáticos.'},
        { id: 3, description: 'Brindar asistencia técnica a usuarios para resolver problemas y responder preguntas sobre el uso de la tecnología.'},
        { id: 4, description: 'Ejecución del Proyecto Control de Asistencia.'},
        { id: 5, description: 'Inducción al manejo de Microsoft Office 365 como atención a usuario.'},
      ],
      location: 'Managua, Nicaragua',
      technologies: [
        { id: 1, name: 'Microsoft Office 365', version: '2021'},
        { id: 2, name: 'Microsoft Teams', version: '2021'},
        { id: 3, name: 'Microsoft SharePoint', version: '2021'},
        { id: 4, name: 'Microsoft OneDrive', version: '2021'},
        { id: 5, name: 'Microsoft Power Automate', version: '2021'},
        { id: 6, name: 'Microsoft Power Apps', version: '2021'},
      ],
    },
    {
      id: 3,
      company: 'Universidad de Managua (UDM).',
      position: 'Profesor de Horario.',
      Dates: '2020',
      responsibilities:[
        { id: 1, description: 'Informática Aplicada (Excel Básico).'},
        { id: 2, description: 'Programación en C#.'},
        { id: 3, description: 'Diagrama de Flujo.'},
      ],
      location: 'Managua, Nicaragua',
      technologies: [
        { id: 1, name: 'Microsoft Excel', version: '2016'},
        { id: 2, name: 'DPL', version: '1.0'},
        { id: 3, name: 'Microsoft Visual Studio Cromunity', version: '2019'},
      ],
    },
    {
      id: 4,
      company: 'Repuestos Estrada, S.A.',
      position: 'Encargado de Inventario y Computo.',
      Dates: '2016 - 2020',
      responsibilities:[
        { id: 1, description: 'Manejo de los Sistema ERP CyS (Controles y Sistemas), Velneo.'},
        { id: 2, description: 'Ingreso de las Compras Locales y Extranjeras de mercadería.'},
        { id: 3, description: 'Ingreso de las Salidas de Bodegas por Faltantes en Inventario o por Cambio de Producto al Cliente.'},
        { id: 4, description: 'Ingreso de Entradas a Bodega por Sobrantes en Inventario o por Cambio de Producto al Cliente.'},
        { id: 5, description: 'Ingreso de Precios de Venta.'},
        { id: 6, description: 'Inventario Físico de la Mercadería.'},
        { id: 7, description: 'Prorrateo de las Pólizas de Importación.'},
        { id: 8, description: 'Reporte de Consolidado de Venta para Pedido de Mercadería a los Proveedores.'},
        { id: 9, description: 'Reporte de Ventas Mensuales.'},
        { id: 10, description: 'Reportes de Existencias Mensual de las Diferentes Bodegas.'},
        { id: 11, description: 'Conciliación de los Prestamos entre Tiendas de los Diferentes Productos.'},
        { id: 12, description: 'Ingreso de Traslados entre Tiendas.'},
        { id: 13, description: 'Ingreso de Productos Utilizados para Inversión de Vehículo Pesado.'},
        { id: 14, description: 'Ingreso de los Vehículos Usados para la Venta.'},
        { id: 15, description: 'Conciliación de Facturas del Proveedor contra Mercadería Física Recibida en Bodega.'},
        { id: 16, description: 'Conciliaciones bancarias.'},
        { id: 17, description: 'Ingresos de depósitos bancarios.'},
        { id: 18, description: 'Instalación y configuración de equipos informáticos, software y sistemas operativos.'},
        { id: 19, description: 'Diagnóstico y solución de problemas técnicos relacionados con hardware, software, redes y sistemas informáticos.'},
        { id: 20, description: 'Brindar asistencia técnica a usuarios para resolver problemas y responder preguntas sobre el uso de la tecnología.'},
        { id: 21, description: 'Configurar y administrar redes informáticas, asegurando su correcto funcionamiento y seguridad.'},
        { id: 22, description: 'Mantener los sistemas y equipos actualizados con las últimas versiones de software y parches de seguridad.'},
      ],
      location: 'Managua, Nicaragua',
      technologies: [
        { id: 1, name: 'Microsoft Excel', version: '2016'},
      ],
    },
    {
      id: 5,
      company: 'Agencia Aduanera Castellanos de Nicaragua, S.A.',
      position: 'Auxiliar Operativo II.',
      Dates: '2016',
      responsibilities:[
        { id: 1, description: 'Manejo del sistema SEA.'},
        { id: 2, description : 'Contabilización de Comprobantes de Pago o CK.'},
        { id: 3, description: 'Contabilización de Transferencias Bancarias.'},
        { id: 4, description: 'Contabilización de Boletines de Impuestos Aduaneros.'},
        { id: 5, description: 'Contabilización de Caja Chica.'},
        { id: 6, description: 'Contabilización de Recibos Oficiales de Caja.'},
        { id: 7, description: 'Gestión de Cuentas por Cobrar a Clientes.'},
        { id: 8, description: 'Conciliación Bancaria.'},
        { id: 9, description: 'Conciliación de las Cuentas Contables de retención 1% y 2%.'},
        { id: 10, description: 'Archivo de los Documentos Contables.'},
      ],
      location: 'Managua, Nicaragua',
      technologies: [
        { id: 1, name: 'Microsoft Excel', version: '2016'},
      ],
    },
    {
      id: 6,
      company: 'Humberto Álvarez Sucesores de Nicaragua, S.A.',
      position: 'Auxiliar Contable.',
      Dates: '2013 - 2015',
      responsibilities:[

        { id: 1, description: 'Manejo del sistema TCO.'},
        { id: 2, description: 'Contabilización Transferencias de Pago.'},
        { id: 3, description: 'Contabilización Traslados de fondos de cuentas bancarias.'},
        { id: 4, description: 'Contabilización de Caja Chica.'},
        { id: 5, description: 'Contabilización de Pago a Proveedores.'},
        { id: 6, description: 'Contabilización Boletines de Impuestos Aduaneros.'},
        { id: 7, description: 'Contabilización Comprobantes de Diario.'},
        { id: 8, description: 'Reportes y Declaración de IVA e IR por Pagar.'},
        { id: 9, description: 'Elaboración de Colillas de Pago.'},
        { id: 10, description: 'Arqueo de Caja Chica.'},
        { id: 11, description: 'Inventario de Activos Fijos.'},
        { id: 12, description: 'Conciliación Bancaria.'},
        { id: 13, description: 'Archivo de los Documentos Contables.'},
      ],
      location: 'Managua, Nicaragua',
      technologies: [
        { id: 1, name: 'Microsoft Excel', version: '2013'},
      ],
    },
  ];

  get workExperiences(): WorkExperience[] {
    return this.workExperince;
  }

}
