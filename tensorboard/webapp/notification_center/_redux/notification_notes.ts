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
import {CategoryEnum, Notification} from '../_redux/notification_center_types';

export const notificationNotes = [
  {
    category: CategoryEnum.WHATS_NEW,
    dateInMs: 1579766400000,
    title: '2.4 release',
    content:
      '<li>Visualize Scalars, Images, and  Histograms in one place</li><li>Custom colors for runs</li><li>Group previews</li>',
  },
] as Notification[];
