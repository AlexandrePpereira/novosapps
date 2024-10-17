import { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, Pressable, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";

export default camera = () => {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [facing, setFacing] = useState('back');

    if (!permissao) {
        return <View />;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.TextPermission}>Você precisa conceder a permissão para usar a câmera</Text>
                <Pressable style={styles.permissionButton} onPress={pedirPermissao}>
                    <Text style={styles.permissionButtonText}>Pedir Permissão</Text>
                </Pressable>
            </View>
        );
    }

    const tirarFoto = async () => {
        const fotoBase64 = await cameraRef.current?.takePictureAsync({
            quality: 0.000000001,
            base64: true
        });
        setFoto(fotoBase64);
    };

    const trocaCamera = () => {
        setFacing(facing === 'back' ? 'front' : 'back');
    };

    const salvarFoto = async () => {
        try {
            await MediaLibrary.saveToLibraryAsync(foto.uri);
            alert('Foto salva na galeria!');
        } catch (error) {
            console.error("Erro ao salvar a foto: ", error);
            alert('Erro ao salvar a foto.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {foto ? (
                <>
                    <SafeAreaView style={styles.container}>
                        <Image source={{ uri: foto.uri }} style={styles.foto} />
                    </SafeAreaView>
                    <View style={styles.cancelbtn}>
                        <Pressable onPress={() => setFoto(null)} style={styles.minibtn}>
                            <Ionicons name="trash-sharp" size={28} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.uploadbtn}>
                        <Pressable onPress={salvarFoto} style={styles.mainbtn}>
                            <Feather name="upload" size={64} color="black" />
                        </Pressable>
                    </View>
                </>
            ) : (
                <CameraView facing={facing} style={styles.camera} ref={cameraRef}>
                    <SafeAreaView style={styles.btnrow}>
                        <Pressable style={styles.hidden}>
                            <Ionicons name="camera-reverse-sharp" size={34} color="black" />
                        </Pressable>
                        <Pressable onPress={tirarFoto} style={styles.mainbtn}>
                            <Ionicons name="camera" size={64} color="black" />
                        </Pressable>
                        <Pressable onPress={trocaCamera} style={styles.btn}>
                            <Ionicons name="camera-reverse-sharp" size={34} color="black" />
                        </Pressable>
                    </SafeAreaView>
                </CameraView>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    TextPermission: {
        textAlign: 'center',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    foto: {
        height: '100%',
        width: '100%',
        position: 'relative',
    },
    btnrow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
    },
    mainbtn: {
        backgroundColor: '#4CAF50',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        opacity: 0.9,
    },
    btn: {
        backgroundColor: '#4CAF50',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        opacity: 0.9,
    },
    minibtn: {
        backgroundColor: '#4CAF50',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        opacity: 0.9,
    },
    cancelbtn: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        paddingTop: 6,
        paddingLeft: 6,
    },
    uploadbtn: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: 20,
    },
    hidden: {
        opacity: 0,
    },
    permissionButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    permissionButtonText: {
        color: 'white',
        fontSize: 18,
    },
});