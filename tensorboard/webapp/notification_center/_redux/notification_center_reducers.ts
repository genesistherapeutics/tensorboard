/* Copyright 2021 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {Action, createReducer, on} from '@ngrx/store';
import * as actions from './notification_center_actions';
import {
  NotificationState,
  NOTIFICATION_LAST_READ_TIME_KEY,
} from './notification_center_types';
import {notificationNotes} from './notification_notes';

const initialState: NotificationState = {
  notifications: notificationNotes,
  lastReadTimestampInMs: window.localStorage.getItem(
    NOTIFICATION_LAST_READ_TIME_KEY
  )
    ? parseInt(window.localStorage.getItem(NOTIFICATION_LAST_READ_TIME_KEY)!)
    : null,
};

const reducer = createReducer(
  initialState,
  on(
    actions.notificationBellClicked,
    (state: NotificationState): NotificationState => {
      // TODO: move update last read timestamp to DataSource
      const timeNow = Date.now();
      window.localStorage.setItem(
        NOTIFICATION_LAST_READ_TIME_KEY,
        timeNow.toString()
      );
      return {
        ...state,
        lastReadTimestampInMs: timeNow,
      };
    }
  )
);

export function reducers(state: NotificationState | undefined, action: Action) {
  return reducer(state, action);
}
