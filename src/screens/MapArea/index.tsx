import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  EventUserLocation,
  MapEvent,
  Region,
} from 'react-native-maps';
import CustomButton from '../../components/custom/CustomButton';
import {MESSAGING} from '../../constants/ScreensName';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import AcceptedJob from '../MapPopups/AcceptedJob';
import ArrivedSwipeUp from '../MapPopups/ArrivedSwipeUp';
import JobEquipmentSwipeUp from '../MapPopups/JobEquipmentSwipeUp';
import JobRequirementSwipeUp from '../MapPopups/JobRequirementSwipeUp';
import NewJobSwipeUp from '../MapPopups/NewJobSwipeUp';
import ReportSwipeUp from '../MapPopups/ReportSwipeUp';
import ReviewsSwipeUp from '../MapPopups/ReviewsSwipeUp';
import useStyles from './styles';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  PermissionStatus,
  openSettings,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import CompassHeading from 'react-native-compass-heading';

type MapAreaNavProps = StackNavigationProp<RootStackParamList, 'MapArea'>;

interface MapAreaProps {
  navigation: any;
}

const INTIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapArea = (props: MapAreaProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<MapAreaNavProps>();

  const mapRef = React.useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);
  const [permission, setPermission] = useState(false);
  const [latitude, setLatitude] = useState(INTIAL_REGION.latitude);
  const [longitude, setLongitude] = useState(INTIAL_REGION.longitude);
  const [tempRegion, setTempRegion] = useState(INTIAL_REGION);
  const [requireLocation, setRequireLocation] = useState(false);
  const [region, setRegion] = useState(INTIAL_REGION);
  const [heading, setHeading] = useState(0);

  const onMapReady = () => {
    console.log('MapReady', mapReady);
    if (!mapReady) {
      setMapReady(true);
      onPressLocation();
    }
  };

  const getPermission = () => {
    return Platform.OS == 'ios'
      ? PERMISSIONS.IOS.LOCATION_ALWAYS
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  };

  const checkCameraPermission = () => {
    check(getPermission())
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            setPermission(true);
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }

        if (!permission) {
          requestPermission();
        } else {
          onPressLocation();
        }
      })
      .catch(error => {
        // …
      });
  };

  const setMarkerHeading = (value: number) => {
    setHeading(value);
  };

  useEffect(() => {
    checkCameraPermission();
    const degree_update_rate = 3;

    CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
      // console.log('CompassHeading: ', heading, accuracy);
      setMarkerHeading(heading);
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);

  const requestPermission = () => {
    request(getPermission())
      .then((result: PermissionStatus) => {
        if (result == RESULTS.GRANTED) {
          setPermission(true);
          onPressLocation();
        } else {
          openSettings().catch(() => console.warn('cannot open settings'));
        }
      })
      .catch(error => {
        // …
        openSettings().catch(() => console.warn('cannot open settings'));
      });
  };

  const onUserLocationChange = (event: EventUserLocation) => {
    setLatitude(event.nativeEvent.coordinate.latitude);
    setLongitude(event.nativeEvent.coordinate.longitude);
  };

  const onMarkerPress = (event: MapEvent) => {
    if (!permission) {
      requestPermission();
    }
  };

  const onPressLocation = () => {
    if (!permission) {
      requestPermission();
    } else {
      setRequireLocation(true);
      Geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: tempRegion.latitudeDelta,
            longitudeDelta: tempRegion.longitudeDelta,
          });
          console.log('Goto my location:', region);
          console.log('Goto my Temp region:', tempRegion);
          mapRef.current?.animateToRegion(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: tempRegion.latitudeDelta,
              longitudeDelta: tempRegion.longitudeDelta,
            },
            350,
          );
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message, 350);
          setRequireLocation(false);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  const onRegionChangeComplete = (value: Region, details: any) => {
    if (mapReady && !requireLocation) {
      console.log('Region Changed', value);
      setTempRegion({
        latitude: value.latitude,
        longitude: value.longitude,
        latitudeDelta: value.latitudeDelta,
        longitudeDelta: value.longitudeDelta,
      });
    } else if (mapReady) {
      console.log('Region Changed Not set', value);
      setRequireLocation(false);
    }
  };

  const [online, setOnline] = useState(false);
  const [jobAssigned, setJobAssigned] = useState(false);
  const [arrived, setArrived] = useState(false);

  const [showNewJobModal, setShowNewJobModal] = useState(false);
  const [showJobAssignedodal, setShowJobAssignedodal] = useState(false);
  const [showJobEquipmentModal, setShowJobEquipmentModal] = useState(false);
  const [showJobReqModal, setShowJobReqModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showViewJobModal, setShowViewJobModal] = useState(false);

  const toggleShowNewJobModal = () => {
    setShowNewJobModal(!showNewJobModal);
  };

  const toggleShowJobAssignedodal = () => {
    setShowJobAssignedodal(!showJobAssignedodal);
  };

  const toggleShowJobEquipmentModal = () => {
    setShowJobEquipmentModal(!showJobEquipmentModal);
  };

  const toggleShowJobReqModal = () => {
    setShowJobReqModal(!showJobReqModal);
  };

  const toggleShowReportModal = () => {
    setShowReportModal(!showReportModal);
  };

  const toggleShowReviewModal = () => {
    setShowReviewModal(!showReviewModal);
  };

  const toggleShowViewJobModal = () => {
    setShowViewJobModal(!showViewJobModal);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          // region={region}
          provider={PROVIDER_GOOGLE}
          initialRegion={INTIAL_REGION}
          onMapReady={onMapReady}
          onMapLoaded={onMapReady}
          onRegionChangeComplete={onRegionChangeComplete}
          // showsUserLocation={true}
          // showsMyLocationButton={true}
          // onUserLocationChange={event => onUserLocationChange(event)}
          onMarkerPress={(event: MapEvent) => onMarkerPress(event)}
          style={styles.mapContainer}>
          <Marker
            draggable
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            onDragEnd={e =>
              console.log(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Searching for opportunities 00:10'}>
            <Image
              source={require('../../assets/images/Marker.png')}
              style={{
                width: 25,
                height: 25,
                transform: [{rotate: `${heading}deg`}],
              }}
            />
          </Marker>
        </MapView>
        <TouchableOpacity
          onPress={() => props.navigation.openDrawer()}
          style={styles.menuBtn}>
          <Text style={styles.menuBtnText}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusButtonContainer}>
        {jobAssigned ? (
          <CustomButton
            text={strings.ViewJob}
            style={styles.viewJobBtn}
            textStyle={styles.statusBtnText}
            handleClick={() => {
              setShowJobAssignedodal(false);
              toggleShowViewJobModal();
            }}
          />
        ) : online ? (
          <CustomButton
            text={strings.GoOffline}
            style={styles.goOfflineBtn}
            textStyle={styles.statusBtnText}
            handleClick={() => {
              toggleShowNewJobModal();
              setArrived(false);
            }}
          />
        ) : (
          <CustomButton
            text={strings.GoOnline}
            style={styles.goOnlineBtn}
            textStyle={styles.statusBtnText}
            handleClick={() => {
              setOnline(true);
            }}
          />
        )}
      </View>

      <TouchableOpacity
        style={styles.locationButtonContainer}
        onPress={() => {
          onPressLocation();
        }}>
        <Image
          style={styles.locationImg}
          source={require('../../assets/images/Location.png')}
        />
      </TouchableOpacity>
      {showNewJobModal && (
        <NewJobSwipeUp
          onHide={toggleShowNewJobModal}
          onDecline={() => {
            setShowNewJobModal(false);
          }}
          onEquipment={() => {
            toggleShowNewJobModal();
            toggleShowJobEquipmentModal();
          }}
          onRequirement={() => {
            toggleShowNewJobModal();
            toggleShowJobReqModal();
          }}
          onAccept={() => {
            setJobAssigned(true);
            toggleShowNewJobModal();
            toggleShowJobAssignedodal();
          }}
          onReport={() => {
            toggleShowNewJobModal();
            toggleShowReportModal();
          }}
          onReview={() => {
            toggleShowNewJobModal();
            toggleShowReviewModal();
          }}
        />
      )}
      {jobAssigned && showJobAssignedodal && (
        <AcceptedJob
          onHide={() => {
            toggleShowJobAssignedodal();
          }}
          onArrived={() => {
            // TODO
          }}
          onMessage={() => {
            navigation.navigate(MESSAGING);
          }}
          onCancel={() => {
            setJobAssigned(false);
            toggleShowJobAssignedodal();
            toggleShowNewJobModal();
          }}
        />
      )}
      {showJobEquipmentModal && (
        <JobEquipmentSwipeUp
          onHide={() => {
            toggleShowJobEquipmentModal();
            jobAssigned ? toggleShowJobAssignedodal() : toggleShowNewJobModal();
          }}
        />
      )}
      {showReportModal && (
        <ReportSwipeUp
          onHide={() => {
            toggleShowReportModal();
            jobAssigned ? toggleShowJobAssignedodal() : toggleShowNewJobModal();
          }}
        />
      )}
      {showReviewModal && (
        <ReviewsSwipeUp
          onHide={() => {
            setShowReviewModal(false);
            jobAssigned ? toggleShowJobAssignedodal() : toggleShowNewJobModal();
          }}
        />
      )}
      {showJobReqModal && (
        <JobRequirementSwipeUp
          onHide={() => {
            toggleShowJobReqModal();
            jobAssigned ? toggleShowJobAssignedodal() : toggleShowNewJobModal();
          }}
        />
      )}
      {showViewJobModal && (
        <ArrivedSwipeUp
          onHide={() => {
            toggleShowViewJobModal();
            jobAssigned && toggleShowJobAssignedodal();
          }}
          onEquipment={() => {
            toggleShowViewJobModal();
            toggleShowJobEquipmentModal();
          }}
          onRequirement={() => {
            toggleShowViewJobModal();
            toggleShowJobReqModal();
          }}
          onReport={() => {
            toggleShowViewJobModal();
            toggleShowReportModal();
          }}
          onReview={() => {
            toggleShowViewJobModal();
            toggleShowReviewModal();
          }}
        />
      )}
    </SafeAreaView>
  );
};
export default MapArea;
