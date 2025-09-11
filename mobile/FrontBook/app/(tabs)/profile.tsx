import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons} from "@expo/vector-icons"

export default function Profile(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                 <Ionicons  name="person" size={60} color={"#ccc"} />
                </View>
                <Text style={styles.fullName}>Ana Julia M.</Text>
                <Text style={styles.userName}>@anajmb</Text>
            </View>

            <View style={styles.statusContainer}>

                <View style={styles.statusItem}>
                    <Text style={styles.statusNumber}>20</Text>
                    <Text style={styles.statusLabel}>Posts</Text>
                </View>

                <View style={styles.statusItem}>
                    <Text style={styles.statusNumber}>156</Text>
                    <Text style={styles.statusLabel}>Seguindo</Text>
                </View>

                <View style={styles.statusItem}>
                    <Text style={styles.statusNumber}>89</Text>
                    <Text style={styles.statusLabel}>Seguidores</Text>
                </View>
  
            </View>

            <View style={styles.settingContainer}> 
                <Text style={styles.settingTitle}>configurações da Conta</Text>

                <TouchableOpacity style={styles.settingItem}>
                  <View style={styles.settingLeft}>

                    <Ionicons name="person-outline" size={24} color={"#66666"} />

                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>Nome do usuário</Text>
                        <Text style={styles.settingValue}>Ana Julia M.</Text>
                    </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color={"#666666"} />
                </TouchableOpacity>

                 <TouchableOpacity style={styles.settingItem}>
                  <View style={styles.settingLeft}>

                    <Ionicons name="person-outline" size={24} color={"#66666"} />

                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>E-mail</Text>
                        <Text style={styles.settingValue}>Anaj@gmail.com</Text>
                    </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color={"#666666"} />
                </TouchableOpacity>

                 <TouchableOpacity style={styles.settingItem}>
                  <View style={styles.settingLeft}>

                    <Ionicons name="person-outline" size={24} color={"#66666"} />

                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>Senha</Text>
                        <Text style={styles.settingValue}>********</Text>
                    </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color={"#666666"} />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#e0e0e0",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
    },
    header: {
        alignItems: "center",
        padding: 25,
        backgroundColor: "#fff",
        borderColor: "#e0e0e0",
        borderWidth: 1
    },
    userName: {
        fontSize: 16, 
        color: "#66666"
    },
    fullName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4
    },
    statusContainer: {
        backgroundColor: "#fff",
        flexDirection: "row",
        padding: 20
    },
    statusItem: {
        flex: 1,
        alignItems: "center"
    },
    statusNumber: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333"
    }, 
    statusLabel: {
        fontSize: 14,
        color: "#66666",
        marginTop: 3
    },
    settingContainer: {
        backgroundColor: "#fff",
        marginBottom: 8
    },
    settingTitle: {
        fontSize: 18, 
        fontWeight: "bold",
        color: "#333",
        padding: 16,
        paddingBottom: 8
    },
    settingItem: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
        padding: 16,
        alignItems: "center"
    },
    settingLabel: {
        fontSize: 16, 
        color: "#333",
        marginBottom: 3
    },
    settingText: {
        marginLeft: 16,
        flex: 1
    },
    settingValue: {
        fontSize: 14,
        color: "#666666"
    },
    settingLeft: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    }
})