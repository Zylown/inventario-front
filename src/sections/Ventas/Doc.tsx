import { Page, Text, StyleSheet, Document, View } from "@react-pdf/renderer";

type Venta = {
  cantidadVentaProducto: number;
  nombreVentaProducto: string;
  precioVentaProducto: number;
  total: number;
};

interface DocProps {
  data: Venta[];
  pagoTotal: number;
  simple?: boolean;
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontSize: 12,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
  total: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
  footer: {
    textAlign: "center",
    marginBottom: 5,
  },
});

export default function Doc({ data, pagoTotal, simple = false }: DocProps) {
  const now = new Date();

  // Crear un array con los nombres de los días de la semana
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  // Crear un array con los nombres de los meses
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  // Obtener el nombre del día de la semana y el mes actual
  const dayName = daysOfWeek[now.getDay()];
  const monthName = months[now.getMonth()];

  // Obtener la parte de la fecha
  const day = String(now.getDate()).padStart(2, "0");
  const year = now.getFullYear();

  // Formatear la hora
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // Convertir formato de 24 horas a 12 horas

  // Construir la cadena final
  const formattedDate = `${dayName}, ${day} ${monthName} ${year} - ${hours}:${minutes} ${period}`;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text>Reporte de venta</Text>
          <Text>{formattedDate}</Text>
          <Text>Desarrollado por Sevastian Caballero - Perú</Text>
        </View>
        {!simple && (
          <View style={styles.section}>
            <View style={styles.row}>
              <Text style={styles.text}>CANT</Text>
              <Text style={styles.text}>PRODUCTO</Text>
              <Text style={styles.text}>P.U</Text>
              <Text style={styles.text}>IMPORTE</Text>
            </View>
            {data.map((venta, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.text}>{venta.cantidadVentaProducto}</Text>
                <Text style={styles.text}>{venta.nombreVentaProducto}</Text>
                <Text style={styles.text}>{venta.precioVentaProducto}</Text>
                <Text style={styles.text}>{venta.total}</Text>
              </View>
            ))}
          </View>
        )}
        <Text style={styles.total}>TOTAL: S/{pagoTotal}</Text>
        <Text style={styles.footer}>¡Gracias por su compra!</Text>
        <Text style={styles.footer}>Este no es un comprobante de Pago</Text>
        <Text style={styles.footer}>
          ig @sevastianhoyos | tiktok @sevastiian
        </Text>
      </Page>
    </Document>
  );
}
