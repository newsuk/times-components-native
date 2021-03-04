//
//  SearchEvents.m
//  TimesComponents
//
//  Created by Konstantinidis, Emmanouil on 21/07/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface SearchEvents : NSObject <RCTBridgeModule>
@end

@implementation SearchEvents

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  return @{ @"algoliaConfig":
              @{
                @"ALGOLIA_INDEX": @"ci_articles",
                @"ALGOLIA_APP_ID": @"testingLQ0QIEJAZP",
                @"ALGOLIA_API_KEY": @"583d94fc81c0da8395ac9ec1ed76fbfe"
              }
  };
}


RCT_EXPORT_METHOD(onArticlePress:(NSString *) url)
{
  NSLog(@"onArticlePress %@", url);
}

@end
