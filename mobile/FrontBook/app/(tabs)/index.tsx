import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const posts = [ 
    {
        id: 1,
        name: "John Pork",
        username:  "john_pork",
        content: "Acabei de criar meu primeiro site com HTML e CSS",
        timestamp: "2h"
    },
         {
        id: 2,
        name: "Maria Dev",
        username:  "mah_dev",
        content: "JavaScript + React = ❤️, Quem mais ama essa combinação?",
        timestamp: "2h"
    },
        {
        id: 3,
        name: "Valquiria Souza",
        username:  "val_sz",
        content: "Dica do dia: sempre use typescript para evitar bugs surpresas",
        timestamp: "1h"
    },
]


export default function TimeLine() {
    return (
        <View style={styles.container}>
            <View style={styles.newPostContainer}>
                <TextInput placeholder="O que está acontecendo?" style={styles.newPostInput} />
                <TouchableOpacity style={styles.postButton}>
                    <Text style={styles.postButtonText}>Postar</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View>
                    <View>
                        <View>
                            <Ionicons name="person" size={20} color={"#666666"}></Ionicons>
                        </View>
                        <View>
                            <Text>maria_dev</Text>
                            <Text>2h atrás</Text>
                        </View>
                    </View>
                    <Text>Hello World</Text>
                </View>
            </ScrollView>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#f5f5f5"
    },
    newPostContainer: {
        backgroundColor: "#fff",
        padding: 16, 
        borderWidth: 1,
        borderColor: "#e0e0e0"
    },
    newPostInput: {
        borderRadius: 8,
        padding: 12,
        minHeight: 80,
        borderWidth: 1,
        borderColor: "e0e0e0",
        fontSize: 16
    },
    postButton: {
        backgroundColor: "#2196f3",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: "flex-end"
    },
    postButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14
    }
})