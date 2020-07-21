//
//  ReactAnalytics.m
//  TimesComponents
//
//  Created by Konstantinidis, Emmanouil on 21/07/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface ReactAnalytics : NSObject <RCTBridgeModule>
@end

@implementation ReactAnalytics

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(track:(NSString *) data)
{
  NSLog(@"track %@", data);
}

@end
