import React from 'react';
import EquipmentList from './EquipmentList';
import EquipmentRemove from './EquipmentRemove';
import EquipmentAdd from './EquipmentAdd';

export default class Equipments extends React.Component{


      render(){
        return(
            <>
            
            <EquipmentList/>
            
            <EquipmentAdd/>
            <EquipmentRemove/>
            </>
            
        )
    }
}