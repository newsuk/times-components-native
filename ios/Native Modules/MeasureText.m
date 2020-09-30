#import "MeasureText.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation MeasureText

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(widths:(NSDictionary *)options
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  float height = [RCTConvert float:options[@"height"]];
  NSArray *texts = [RCTConvert NSArray:options[@"texts"]];
  CGFloat fontSize = [RCTConvert CGFloat:options[@"fontSize"]];
  NSString *fontFamily = [RCTConvert NSString:options[@"fontFamily"]];
  NSString *fontWeight = [RCTConvert NSString:options[@"fontWeight"]];
  
  NSMutableArray* results = [[NSMutableArray alloc] init];
  
  UIFont *font = [UIFont fontWithName:fontFamily size:fontSize];
  NSDictionary *userAttributes = @{NSFontAttributeName: font,
                                   NSForegroundColorAttributeName: [UIColor blackColor]};

  for (NSString* text in texts) {
    CGSize size = [text sizeWithAttributes: userAttributes];
    [results addObject:[NSNumber numberWithFloat:size.width]];
  }
  resolve(results);
}


@end

