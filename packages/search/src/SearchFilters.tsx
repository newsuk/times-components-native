import React from "react";
import { connectNumericMenu } from "react-instantsearch-native";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomSheet from "reanimated-bottom-sheet";

const renderHeader = () => {
  return (
    <View
      style={{
        backgroundColor: "#3a3a3a",
        padding: 10,
      }}
    >
      <Text
        style={{
          color: "#FFF",
        }}
      >
        Date range
      </Text>
    </View>
  );
};

export const SearchFilters = connectNumericMenu(
  ({ currentRefinement, items, refine }) => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    const sheetRef = React.useRef<BottomSheet>(null);
    const handleSetTimeFilter = (value: number) => () => {
      refine(value);

      if (sheetRef && sheetRef.current) {
        setMenuIsOpen(false);
        sheetRef.current.snapTo(0);
      }
    };

    const ItemRow: ListRenderItem<{ label: string; value: number }> = ({
      item,
    }) => {
      return (
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={handleSetTimeFilter(item.value)}>
            <Text style={styles.menuItemLabel}>{item.label}</Text>
          </TouchableOpacity>
        </View>
      );
    };

    const handleOpenMenu = () => {
      if (sheetRef && sheetRef.current) {
        setMenuIsOpen(true);
        sheetRef.current.snapTo(1);
      }
    };

    const handleCloseMenu = () => {
      if (sheetRef && sheetRef.current) {
        setMenuIsOpen(false);
        sheetRef.current.snapTo(0);
      }
    };

    const renderContent = () => (
      <View style={styles.menuContainer}>
        <FlatList
          data={items}
          renderItem={(props) => <ItemRow {...props} />}
          keyExtractor={(item) => item.label}
        />
      </View>
    );

    return (
      <>
        <View style={styles.container}>
          <Text style={styles.label}>Date range: </Text>
          <TouchableOpacity onPress={handleOpenMenu} style={styles.button}>
            <Text>
              {items.find((i) => i.value === currentRefinement)?.label}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          pointerEvents={menuIsOpen ? undefined : "none"}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            opacity: menuIsOpen ? 0.3 : 0,
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          <TouchableOpacity
            onPress={handleCloseMenu}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 100,
            }}
          />
        </View>

        <BottomSheet
          ref={sheetRef}
          snapPoints={[-100, 235]}
          initialSnap={0}
          enabledInnerScrolling={false}
          renderHeader={renderHeader}
          renderContent={renderContent}
        />
      </>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#cacaca",
  },
  label: {
    fontFamily: "GillSansMTStd-Medium",
    color: "#3a3a3a",
  },
  button: {
    borderWidth: 1,
    borderColor: "#eaeaea",
    padding: 10,
    flex: 1,
  },
  menuContainer: {
    backgroundColor: "#fafafa",
    padding: 10,
    paddingVertical: 20,
    height: 200,
  },
  menuItem: {
    marginBottom: 16,
  },
  menuItemLabel: {
    fontFamily: "GillSansMTStd-Medium",
    fontSize: 16,
  },
});
