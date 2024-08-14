import {View, Text, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import {COLORS} from '../constants';
const WeatherCard = ({date, temp, humidity, pressure, tempMax, tempMin}) => {
  return (
    <View style={styles.card}>
      <DataTable style={styles.table}>
        <View style={styles.cardHeader}></View>
        <DataTable.Header
          style={{...styles.tableRow, backgroundColor: COLORS.orange}}>
          <DataTable.Title style={{...styles.tableTitle1}}>
            <Text style={styles.headerText}>Date: {date}</Text>
          </DataTable.Title>
        </DataTable.Header>
        <DataTable.Header style={styles.tableRow_gary}>
          <DataTable.Title style={styles.tableTitle}>
            <Text style={styles.text}>Temperature</Text>
          </DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={styles.tableRow_gary}>
          <DataTable.Cell
            style={{...styles.tableCell_gray, ...styles.rightBorder}}>
            <Text style={styles.cellText}>Min</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.tableCell_gray}>
            <Text style={styles.text}>Max</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.tableRow_gary}>
          <DataTable.Cell
            style={{...styles.tableCell_gray, ...styles.rightBorder}}>
            <Text style={styles.cellText}>{tempMin}</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.tableCell_gray}>
            <Text style={styles.text}>{tempMax}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell style={{...styles.tableCell, ...styles.rightBorder}}>
            <Text style={styles.cellText}>Pressure</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.tableCell}>
            <Text style={styles.text}>{pressure}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell style={{...styles.tableCell, ...styles.rightBorder}}>
            <Text style={styles.cellText}>Humidity</Text>
          </DataTable.Cell>
          <DataTable.Cell style={styles.tableCell}>
            <Text style={styles.text}>{humidity}</Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    backgroundColor: COLORS.orange,
  },
  card: {width: 300, marginHorizontal: 10},
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
  table: {
    marginTop: 10,
    borderWidth: 1,
  },
  tableTitle: {
    borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
  },
  tableTitle1: {
    borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.orange,
  },
  tableRow: {
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  tableRow_gary: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderColor: COLORS.black,
    backgroundColor: COLORS.gray,
  },
  tableCell: {
    borderColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    flex: 1,
  },
  rightBorder: {borderRightWidth: 1},
  tableCell_gray: {
    borderColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: COLORS.gray,
  },
  text: {
    color: COLORS.black,
    fontSize: 18,
    textAlign: 'center',
  },
  cellText: {
    color: COLORS.black,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default WeatherCard;
