
import {useState} from 'react';
import {View} from 'react-native';
import {Button, SegmentedButtons, TextInput} from 'react-native-paper';

export default function TripForm() {
    const [vehicle, setVehicle] = useState('car1');

    return (
        <View>
            <SegmentedButtons
                value={vehicle}
                onValueChange={setVehicle}
                buttons={[
                    {value: 'car1', label: 'Auto 1'},
                    {value: 'car2', label: 'Auto 2'},
                ]}
            />
            <TextInput label="Ajon kuvaus" />
            <
                <Button>mode="contained>Tallenna</Button>
        </View>
    );
} 