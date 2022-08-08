import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default function Pdf() {
  return (
    <PDFDownloadLink
      document={<MyDocument />}
      fileName="movielist.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#4a4a4a",
        backgroundColor: "#f2f2f2",
        border: "1px solid #4a4a4a"
      }}
    />
  );
}
