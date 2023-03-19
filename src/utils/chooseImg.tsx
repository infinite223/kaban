import * as ImagePicker from 'expo-image-picker';

export const chooseImg = async (setImage: (value:any) => void, profile?:boolean) => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [3, 3],
        quality: 1,			
        allowsEditing: true,
    });


    if (!result.canceled) {
        setImage({...result.assets?.[0], place: {}});  
    }
};